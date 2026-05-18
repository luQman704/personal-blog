export interface Post {
  id:            string
  slug:          string
  title:         string
  excerpt:       string
  category:      string
  tags:          string[]
  date:          string
  readTime:      string
  featured:      boolean
  // Only populated on single post pages (getPostBySlug)
  body?:         string
  // Cover image — undefined if no image set
  coverImageUrl?: string
  coverImageAlt?: string
}

export interface Author {
  name:     string
  location: string
  avatar?:  string
}
