import type { Post } from '@/types'

// Each post gets unique demo body content keyed by slug.
// When your Drupal backend is live, replace this entire component with:
//   <div className="post-body ..." dangerouslySetInnerHTML={{ __html: post.body }} />
// or use next-mdx-remote for MDX content.

interface PostBodyProps {
  post: Post
}

const bodies: Record<string, React.ReactNode> = {

  'solr-pagination-bug-wto': (
    <>
      <p>
        Solr is powerful. When it works, it works brilliantly. But when it silently
        truncates your results at a deep pagination threshold — no error, no warning,
        just missing data — you don't know you have a problem until an editor notices
        the export is short by 400 records.
      </p>
      <p>
        That's exactly what happened on a production platform I was maintaining for the
        World Trade Organization. The EDB export had been quietly incomplete for weeks.
        Here's how I found it, fixed it, and what I'd bake in from day one on future projects.
      </p>
      <h2>The symptom</h2>
      <p>
        An editor flagged that a bulk export of trade policy records was missing entries.
        The count on the UI said 1,847 records. The CSV had 1,000 exactly. No errors
        anywhere — not in watchdog, not in Solr logs, nowhere obvious.
      </p>
      <div className="callout">
        <p>
          <strong>Key signal:</strong> The number 1,000 should have been the immediate tell.
          Solr's default <code>maxRows</code> cap is exactly 1,000 when deep pagination
          isn't explicitly configured. We'd just never hit that threshold before.
        </p>
      </div>
      <h2>The fix</h2>
      <p>
        The cleanest solution for a bulk export — where you need all results and don't
        need Solr's relevance ranking — was to bypass Search API entirely and query the
        database directly.
      </p>
      <pre><code>{`$query = \\Drupal::entityQuery('node')
  ->condition('type', 'trade_policy_review')
  ->condition('status', 1)
  ->accessCheck(FALSE);

$nids  = $query->execute();
$nodes = \\Drupal::entityTypeManager()
  ->getStorage('node')
  ->loadMultiple($nids);`}</code></pre>
      <blockquote>
        <p>"The best fix isn't always the most elegant — sometimes it's routing around the constraint entirely."</p>
      </blockquote>
      <h2>What I'd do differently</h2>
      <p>
        Add a result count assertion in any export that matters. Before processing,
        compare the Search API count against a direct DB count. If they diverge by
        more than a small tolerance, throw an exception and alert. Two lines of code
        would have caught this on the very first run.
      </p>
    </>
  ),

  'headless-drupal-nextjs': (
    <>
      <p>
        "Headless Drupal" sounds straightforward — Drupal manages content, Next.js
        renders it. In practice there are a handful of sharp edges that nobody writes
        about until they've already cut themselves. Here are the ones that caught me.
      </p>
      <h2>CORS on the Drupal side</h2>
      <p>
        By default Drupal's JSON:API will block cross-origin requests. You need to
        configure the <code>cors.config</code> in <code>services.yml</code> explicitly.
        Don't just set <code>allowedOrigins: ['*']</code> on production — scope it to
        your frontend domain.
      </p>
      <pre><code>{`# web/sites/default/services.yml
cors.config:
  enabled: true
  allowedHeaders: ['Content-Type', 'Authorization']
  allowedMethods: ['GET', 'POST', 'PATCH', 'DELETE']
  allowedOrigins: ['https://your-frontend.vercel.app']
  exposedHeaders: false
  maxAge: false
  supportsCredentials: false`}</code></pre>
      <h2>Preview mode</h2>
      <p>
        Drupal's JSON:API doesn't expose unpublished content to anonymous requests.
        For editorial preview you need the <code>jsonapi_extras</code> module plus a
        custom Next.js preview route that authenticates against Drupal's OAuth token
        endpoint before fetching draft content.
      </p>
      <div className="callout">
        <p>
          <strong>Tip:</strong> Use <code>next/headers</code> cookies to persist the
          Drupal session token across preview requests rather than passing it in query
          params — it's cleaner and harder to accidentally leak in logs.
        </p>
      </div>
      <h2>Caching gotchas</h2>
      <p>
        Next.js ISR and Drupal's internal page cache can fight each other. The symptom
        is stale content on the frontend even after a Drupal save. The fix is a cache
        tag purge webhook — Drupal sends a purge request to your Next.js revalidation
        endpoint on node save. Simple, reliable, worth the 30 minutes to set up.
      </p>
    </>
  ),

  'saml-dual-auth-drupal-10': (
    <>
      <p>
        Most SAML guides assume a single identity provider. The WTO platform I worked
        on needed two — one for WTO staff, one for external delegates — each with
        different attribute mappings and session lifetimes. Here's the implementation.
      </p>
      <h2>Module setup</h2>
      <p>
        The <code>samlauth</code> contrib module supports multiple IdP configurations
        from Drupal 10.1 onwards via config entities. Each IdP gets its own
        <code>saml_idp</code> config entity with its own certificate, SSO URL, and
        attribute mapping.
      </p>
      <pre><code>{`# Install via Composer
composer require drupal/samlauth

# Enable
drush en samlauth -y

# Two separate config entities:
# saml_idp.wto_staff
# saml_idp.external_delegates`}</code></pre>
      <h2>The session edge case</h2>
      <p>
        When a user authenticates via IdP A and then visits a route that triggers IdP B's
        assertion, Drupal's session handler merges the assertions by default, which corrupts
        the role assignment. The fix is a custom <code>EventSubscriber</code> on
        <code>SamlauthUserSyncEvent</code> that checks which IdP originated the assertion
        before applying roles.
      </p>
      <div className="callout">
        <p>
          <strong>Key insight:</strong> Always log the full SAML response during
          development. The attribute names your IdP sends rarely match what you expect,
          and silent mapping failures are the most common cause of "user logged in but
          has no roles."
        </p>
      </div>
      <blockquote>
        <p>"SAML problems are always either a certificate issue, a clock skew issue, or an attribute mapping issue. Usually all three."</p>
      </blockquote>
    </>
  ),

  'drupal-10-js-once-api': (
    <>
      <p>
        Drupal 10 dropped jQuery's <code>.once()</code> plugin and replaced it with a
        standalone <code>once()</code> library. This is the single most common breakage
        point in Drupal 9 → 10 module upgrades, and it fails silently in a way that's
        easy to miss in testing.
      </p>
      <h2>What changed</h2>
      <p>
        In Drupal 9 you'd write this to ensure a behaviour only fires once per element:
      </p>
      <pre><code>{`// Drupal 9 — jQuery .once()
Drupal.behaviors.myBehavior = {
  attach: function (context) {
    $(context).find('.my-element').once('myBehavior').each(function () {
      // runs once per element
    });
  }
};`}</code></pre>
      <p>In Drupal 10 the standalone <code>once()</code> API replaces this entirely:</p>
      <pre><code>{`// Drupal 10 — standalone once()
Drupal.behaviors.myBehavior = {
  attach: function (context) {
    once('myBehavior', '.my-element', context).forEach(function (el) {
      // runs once per element
    });
  }
};`}</code></pre>
      <h2>The library declaration</h2>
      <p>
        You also need to declare the dependency in your module's
        <code>.libraries.yml</code> — otherwise <code>once</code> won't be available
        at runtime even if the syntax is correct.
      </p>
      <pre><code>{`# mymodule.libraries.yml
mymodule/behaviors:
  js:
    js/my-behavior.js: {}
  dependencies:
    - core/once        # <-- this is the key line
    - core/drupal`}</code></pre>
      <div className="callout">
        <p>
          <strong>Migration tip:</strong> Run <code>grep -r "\.once(" web/modules/custom</code>
          to find every occurrence in your custom modules at once. There are usually more
          than you expect.
        </p>
      </div>
    </>
  ),

  'ga-analytics-tracker-module': (
    <>
      <p>
        When Google Analytics introduced consent mode requirements that clashed with
        the WTO's data governance policy, we needed to replace GA entirely with a
        lightweight, self-hosted tracker. Here's how we built it as a custom Drupal module.
      </p>
      <h2>The approach</h2>
      <p>
        Rather than a third-party script, we wrote a small event subscriber that fires on
        every Symfony kernel request and logs structured data to a custom database table.
        No external dependencies, no cookies, fully GDPR-compliant.
      </p>
      <pre><code>{`// src/EventSubscriber/AnalyticsEventSubscriber.php
class AnalyticsEventSubscriber implements EventSubscriberInterface {
  public function onRequest(RequestEvent $event): void {
    $request = $event->getRequest();
    $this->tracker->record([
      'path'       => $request->getPathInfo(),
      'referrer'   => $request->headers->get('referer', ''),
      'user_agent' => $request->headers->get('User-Agent', ''),
      'timestamp'  => time(),
      'uid'        => $this->currentUser->id(),
    ]);
  }
}`}</code></pre>
      <h2>The dashboard</h2>
      <p>
        A custom admin route exposes the data as a simple table view using Drupal's
        Views-style render arrays. Nothing fancy — page views, top paths, referrer
        breakdown, unique visitors by day. Everything the content team actually needed.
      </p>
      <blockquote>
        <p>"The best analytics tool is the one that only collects what you actually use."</p>
      </blockquote>
    </>
  ),

}

// Fallback body for posts without specific content
const fallbackBody = (post: Post) => (
  <>
    <p>
      This is a demo post for <em>{post.title}</em>. When your Drupal backend is
      connected, this content will be fetched from the JSON:API and rendered here.
      You can also use MDX files via <code>next-mdx-remote</code> for static content.
    </p>
    <h2>Getting started</h2>
    <p>
      Connect your Drupal backend by setting <code>NEXT_PUBLIC_DRUPAL_BASE_URL</code>
      in your <code>.env.local</code> file. The <code>getDrupalPosts()</code> helper
      in <code>src/lib/posts.ts</code> will automatically switch from mock data to
      live Drupal content.
    </p>
    <div className="callout">
      <p>
        <strong>Note:</strong> The post body field in Drupal should be exposed via
        JSON:API. Make sure <code>body</code> is included in your resource type's
        allowed fields configuration.
      </p>
    </div>
    <pre><code>{`// Fetch a single post with body content
const res = await fetch(
  process.env.NEXT_PUBLIC_DRUPAL_BASE_URL +
  '/jsonapi/node/article?filter[field_slug]=' + slug +
  '&fields[node--article]=title,body,field_excerpt'
)
const json = await res.json()
const body = json.data[0].attributes.body.processed`}</code></pre>
  </>
)

export default function PostBody({ post }: PostBodyProps) {
  const content = bodies[post.slug] ?? fallbackBody(post)

  return (
    <div className="post-body mx-auto px-5 md:px-10" style={{ maxWidth: '680px' }}>
      {content}
    </div>
  )
}
