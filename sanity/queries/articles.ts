export const ARTICLES_QUERY = `*[
  _type == "article"
] {
  _id,
  title,
  slug,
  coverImage,
  body,
  excerpt,
  _createdAt
}`;