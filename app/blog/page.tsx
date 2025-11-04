import BlogArticle from '@/components/BlogArticle';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const page = () => {
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
          <BlogArticle 
            articleId='1'
          />
          <BlogArticle 
            articleId='2'
          />
          <BlogArticle 
            articleId='3'
          />
          <BlogArticle 
            articleId='4'          
          />
          <BlogArticle 
            articleId='5'
          />
          <BlogArticle 
            articleId='6'
          />
          <BlogArticle 
            articleId='7'
          />
          <BlogArticle 
            articleId='8'
          />
          <BlogArticle 
            articleId='9'
          />
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