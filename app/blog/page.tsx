import BlogArticle from '@/components/BlogArticle';
import { urlFor } from '@/sanity/imageBuilder';
import { fetchContent } from '@/sanity/lib/fetchers';
import { ARTICLES_QUERY } from '@/sanity/queries/articles';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';
import { SanityDocument } from 'next-sanity';

const page = async () => {
  const articles = await fetchContent(ARTICLES_QUERY);

  return (
    <div className="page blog-page">
      <section className="page-banner">
        <div className="overlay">
          <div className="container">
            <h1 className="main-header">
              <span className="accent-bar"></span>
              Our Blog
            </h1>
          </div>
        </div>
      </section>

      <section className="grid">
        <div className="container">
          {
            articles.length !== 0 ? articles.map((article: SanityDocument) => (
              <BlogArticle
                key={article._id}
                image={urlFor(article.coverImage).url()}
                title={article.title}
                body={article.body}
                datePublished={new Date(article._createdAt).toLocaleDateString("en-us", {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
                excerpt={article.excerpt}
                href={article.slug}
              />
            )) : <p className="empty-state">No articles to display yet</p>
          }
        </div>
      </section>

      <div className="pagination">
        <span>
          <button className="pagination-button">
            <ChevronLeft />
          </button>
        </span>

        <span>
          <button className="pagination-button">1</button>
        </span>

        <span>
          <button className="pagination-button">2</button>
        </span>

        <span>
          ......
        </span>

        <span>
          <button className="pagination-button">10</button>
        </span>

        <span>
          <button className="pagination-button">
            <ChevronRight />
          </button>
        </span>
      </div>
    </div>
  );
}

export default page;