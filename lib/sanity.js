import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'sao3p51v',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2024-02-05',
})

export async function getBlogPosts() {
  return client.fetch(`
    *[_type == "blogPost"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      author,
      publishedAt,
      excerpt,
      mainImage,
      categories
    }
  `)
}

export async function getBlogPost(slug) {
  return client.fetch(`
    *[_type == "blogPost" && slug.current == $slug][0] {
      _id,
      title,
      author,
      publishedAt,
      excerpt,
      mainImage,
      content,
      categories
    }
  `, { slug })
}