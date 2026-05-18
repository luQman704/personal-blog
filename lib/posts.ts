/**
 * lib/posts.ts
 *
 * All data fetching from the Drupal JSON:API backend.
 *
 * Requires in .env.local:
 *   NEXT_PUBLIC_DRUPAL_BASE_URL=https://your-drupal-site.com
 *
 * Drupal setup required:
 *   - jsonapi_extras module (resource path aliased to /jsonapi/articles)
 *   - Article content type with fields:
 *       field_slug, field_excerpt, field_category, field_tags,
 *       field_image, field_read_time, field_featured
 *   - JSON:API enabled (core module, no config needed beyond field exposure)
 */

import type { Post } from '@/types'

// ─── Config ──────────────────────────────────────────────────────────────────

const DRUPAL_BASE_URL = process.env.NEXT_PUBLIC_DRUPAL_BASE_URL

/**
 * Throws a clear error if the env variable is missing.
 * Called at the top of every fetch function so failures surface immediately.
 */
function getDrupalBase(): string {
  if (!DRUPAL_BASE_URL) {
    throw new Error(
      'NEXT_PUBLIC_DRUPAL_BASE_URL is not set. ' +
      'Add it to your .env.local file:\n' +
      'NEXT_PUBLIC_DRUPAL_BASE_URL=https://your-drupal-site.com'
    )
  }
  return DRUPAL_BASE_URL.replace(/\/$/, '') // strip trailing slash
}

// ─── JSON:API field selectors ─────────────────────────────────────────────────
// Only fetch what we actually need — keeps responses lean.

/** Fields fetched for listing pages (no body) */
const LIST_FIELDS = [
  'title',
  'field_slug',
  'field_excerpt',
  'field_read_time',
  'field_featured',
  'created',
  'status',
  'path',
].join(',')

/** Additional fields fetched for a single post page (adds body) */
const SINGLE_FIELDS = LIST_FIELDS + ',body'

/** Fields to include from the category taxonomy term */
const CATEGORY_FIELDS = 'name'

/** Fields to include from each tag taxonomy term */
const TAG_FIELDS = 'name'

// ─── Public API ───────────────────────────────────────────────────────────────

/**
 * Fetch all published articles for listing pages.
 * Does NOT include body — keeps the response fast.
 * Sorted newest first.
 */
export async function getPosts(): Promise<Post[]> {
  const base = getDrupalBase()

  const params = new URLSearchParams({
    'filter[status]':               '1',
    'fields[node--article]':        LIST_FIELDS,
    'fields[taxonomy_term--article_categories]': CATEGORY_FIELDS,
    'fields[taxonomy_term--tags]':  TAG_FIELDS,
    'include':                      'field_category,field_tags,field_image',
    'sort':                         '-created',
    'page[limit]':                  '50',
  })

  const url = `${base}/jsonapi/articles?${params.toString()}`
  console.log(url);

  const res = await fetch(url, {
    next: {
      revalidate: 60, // ISR — revalidate every 60 seconds
      tags: ['articles'],
    },
  })

  if (!res.ok) {
    throw new Error(
      `Drupal JSON:API error fetching articles list: ${res.status} ${res.statusText}\n` +
      `URL: ${url}`
    )
  }

  const json = await res.json()

  if (!json.data || !Array.isArray(json.data)) {
    throw new Error('Drupal JSON:API returned unexpected shape for articles list')
  }

  // Build an included resource map for fast relationship lookups
  const included = buildIncludedMap(json.included ?? [])

  return json.data.map((node: DrupalNode) => nodeToPost(node, included))
}

/**
 * Fetch a single article by its field_slug value.
 * Includes the full body field.
 */
export async function getPostBySlug(slug: string): Promise<Post | null> {
  const base = getDrupalBase()

  const params = new URLSearchParams({
    'filter[status]':               '1',
    'filter[field_slug]':           slug,
    'fields[node--article]':        SINGLE_FIELDS,
    'fields[taxonomy_term--article_categories]': CATEGORY_FIELDS,
    'fields[taxonomy_term--tags]':  TAG_FIELDS,
    'include':                      'field_category,field_tags,field_image',
  })

  const url = `${base}/jsonapi/articles?${params.toString()}`

  const res = await fetch(url, {
    next: {
      revalidate: 60,
      tags: [`article:${slug}`],
    },
  })

  if (!res.ok) {
    throw new Error(
      `Drupal JSON:API error fetching article "${slug}": ${res.status} ${res.statusText}\n` +
      `URL: ${url}`
    )
  }

  const json = await res.json()

  if (!json.data || !Array.isArray(json.data) || json.data.length === 0) {
    return null // post not found — caller should call notFound()
  }

  const included = buildIncludedMap(json.included ?? [])
  return nodeToPost(json.data[0], included, true)
}

/**
 * Fetch the single featured article (field_featured = 1).
 * Falls back to the most recent article if none are marked featured.
 */
export async function getFeaturedPost(): Promise<Post | null> {
  const base = getDrupalBase()

  const params = new URLSearchParams({
    'filter[status]':               '1',
    'filter[field_featured]':       '1',
    'fields[node--article]':        LIST_FIELDS,
    'fields[taxonomy_term--article_categories]': CATEGORY_FIELDS,
    'fields[taxonomy_term--tags]':  TAG_FIELDS,
    'include':                      'field_category,field_tags,field_image',
    'page[limit]':                  '1',
  })

  const url = `${base}/jsonapi/articles?${params.toString()}`

  const res = await fetch(url, {
    next: { revalidate: 60, tags: ['articles'] },
  })

  if (!res.ok) {
    throw new Error(
      `Drupal JSON:API error fetching featured post: ${res.status} ${res.statusText}`
    )
  }

  const json = await res.json()
  const included = buildIncludedMap(json.included ?? [])

  if (json.data?.length > 0) {
    return nodeToPost(json.data[0], included)
  }

  // No featured post set — fall back to most recent
  const all = await getPosts()
  return all[0] ?? null
}

/**
 * Fetch only the non-featured posts for the grid and list sections.
 * Excludes whichever post is currently featured.
 */
export async function getNonFeaturedPosts(): Promise<Post[]> {
  const all      = await getPosts()
  const featured = all.find((p) => p.featured)

  if (!featured) return all.slice(1)   // no featured flag set — skip first
  return all.filter((p) => !p.featured)
}

/**
 * Returns all slugs for generateStaticParams().
 * Lightweight — only fetches field_slug.
 */
export async function getAllSlugs(): Promise<string[]> {
  const base = getDrupalBase()

  const params = new URLSearchParams({
    'filter[status]':        '1',
    'fields[node--article]': 'field_slug',
    'page[limit]':           '100',
  })

  const url = `${base}/jsonapi/articles?${params.toString()}`

  const res = await fetch(url, {
    next: { revalidate: 3600, tags: ['articles'] }, // slugs change rarely
  })

  if (!res.ok) {
    throw new Error(
      `Drupal JSON:API error fetching slugs: ${res.status} ${res.statusText}`
    )
  }

  const json = await res.json()

  return (json.data ?? [])
    .map((node: DrupalNode) => node.attributes?.field_slug as string)
    .filter(Boolean)
}

// ─── Drupal → Post mapper ─────────────────────────────────────────────────────

/**
 * Maps a raw Drupal JSON:API node resource to our Post type.
 *
 * @param node     The JSON:API node resource object
 * @param included Map of included resources keyed by "type:id"
 * @param withBody Whether to include the body field (single post pages only)
 */
function nodeToPost(
  node: DrupalNode,
  included: IncludedMap,
  withBody = false
): Post {
  const attr = node.attributes

  // ── Category ───────────────────────────────────────────────────────────────
  const categoryRef = node.relationships?.field_category?.data
  const categoryTerm = categoryRef
    ? included[`taxonomy_term--article_categories:${categoryRef.id}`]
    : null
  const category = categoryTerm?.attributes?.name ?? 'Career'

  // ── Tags ───────────────────────────────────────────────────────────────────
  const tagRefs: DrupalRelRef[] = node.relationships?.field_tags?.data ?? []
  const tags = tagRefs
    .map((ref) => included[`taxonomy_term--tags:${ref.id}`]?.attributes?.name)
    .filter((name): name is string => Boolean(name))

  // ── Cover image ────────────────────────────────────────────────────────────
  const imageRef = node.relationships?.field_image?.data
  const imageFile = imageRef
    ? included[`file--file:${imageRef.id}`]
    : null
  const coverImageUrl = imageFile?.attributes?.uri?.url
    ? resolveFileUrl(imageFile.attributes.uri.url)
    : undefined

  // ── Date formatting ────────────────────────────────────────────────────────
  const createdDate = attr.created
    ? new Date(attr.created).toLocaleDateString('en-GB', {
        month: 'short',
        year:  'numeric',
      })
    : ''

  // ── Read time ──────────────────────────────────────────────────────────────
  // Use the stored field value, or fall back to a word-count estimate
  // from the body if body is included.
  let readTime = attr.field_read_time
    ? `${attr.field_read_time} min read`
    : undefined

  if (!readTime && withBody && attr.body?.value) {
    const wordCount = attr.body.value.replace(/<[^>]+>/g, '').split(/\s+/).length
    readTime = `${Math.max(1, Math.ceil(wordCount / 200))} min read`
  }

  readTime = readTime ?? '5 min read'

  return {
    id:           node.id,
    slug:         attr.field_slug ?? slugFromPath(attr.path?.alias),
    title:        attr.title ?? '',
    excerpt:      attr.field_excerpt ?? attr.body?.summary ?? '',
    category,
    tags,
    date:         createdDate,
    readTime,
    featured:     Boolean(attr.field_featured),
    coverImageUrl,
    coverImageAlt: imageRef ? (imageRef as any).meta?.alt ?? '' : '',
    // Only populated on single post pages
    body:         withBody ? (attr.body?.processed ?? '') : undefined,
  }
}

// ─── Included resource map ────────────────────────────────────────────────────

type IncludedMap = Record<string, DrupalResource>

/**
 * Builds a lookup map from the JSON:API `included` array.
 * Key format: "type:id" e.g. "taxonomy_term--article_categories:abc-123"
 */
function buildIncludedMap(included: DrupalResource[]): IncludedMap {
  const map: IncludedMap = {}
  for (const resource of included) {
    map[`${resource.type}:${resource.id}`] = resource
  }
  return map
}

// ─── URL helpers ──────────────────────────────────────────────────────────────

/**
 * Resolves a Drupal file URI to an absolute URL.
 * Drupal returns relative paths like "/sites/default/files/..."
 * or full URIs like "public://articles/2026-05/image.jpg"
 */
function resolveFileUrl(uri: string): string {
  if (uri.startsWith('http')) return uri
  const base = getDrupalBase()
  // Strip public:// scheme if present — shouldn't appear in uri.url but just in case
  const path = uri.startsWith('/') ? uri : `/${uri}`
  return `${base}${path}`
}

/**
 * Derives a slug from a Drupal path alias as a last resort.
 * e.g. "/articles/my-post-title" → "my-post-title"
 */
function slugFromPath(alias?: string): string {
  if (!alias) return ''
  return alias.split('/').filter(Boolean).pop() ?? ''
}

// ─── Raw Drupal JSON:API types ────────────────────────────────────────────────
// Minimal types — just enough to safely access what we need.

interface DrupalResource {
  id:             string
  type:           string
  attributes:     Record<string, any>
  relationships?: Record<string, any>
}

interface DrupalNode extends DrupalResource {
  attributes: {
    title:           string
    field_slug:      string
    field_excerpt:   string
    field_read_time: number | null
    field_featured:  boolean | number
    created:         string
    status:          boolean
    path?:           { alias: string }
    body?: {
      value:     string
      processed: string
      summary:   string
    }
  }
  relationships: {
    field_category?:    { data: DrupalRelRef | null }
    field_tags?:        { data: DrupalRelRef[] }
    field_image?: { data: DrupalRelRef | null }
  }
}

interface DrupalRelRef {
  id:   string
  type: string
  meta?: Record<string, any>
}
