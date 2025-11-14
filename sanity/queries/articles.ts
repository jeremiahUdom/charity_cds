export const ARTICLES_QUERY = `*[
  _type == "article"
  && defined(slug.current)
] {
  _id,
  title,
  slug,
  coverImage,
  body,
  excerpt,
  _createdAt
}`;

export const ARTICLE_QUERY = `*[
  _type == "article"
  && slug.current == $slug
][0]{
  _id,
  title,
  slug,
  coverImage,
  body,
  excerpt,
  _createdAt
}`;