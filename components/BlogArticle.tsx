import { ArrowRightAlt, CalendarMonth } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

interface BlogArticleProps{
  articleId: string
}

const BlogArticle = (props: BlogArticleProps) => {
  const { articleId } = props;

  return (
    <div className="article">
      <div className="article-image-wrapper">
        <Image 
          src="/images/hero8.jpg"
          alt="Blog Article Image"
          fill
          className="article-image"
        />
      </div>
      <div className="article-meta">
        <span className="article-meta-data">
          <span className="icon">
            <CalendarMonth />
          </span>
          <span>
            <p className="text">30th Oct, 2025</p>
          </span>
        </span>
      </div>
      <h3 className="article-title">Lorem ipsum dolor sit amet ipsum dolor sit amet. </h3>
      <p className="regular-text article-body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium esse rerum, facilis iusto exercitationem, voluptas voluptatum odio pariatur, vel nemo iure dolorem optio. Temporibus dignissimos iusto impedit nihil, dolorum possimus!</p>
      <div className="article-cta">
        <Link href={`/blog/${articleId}`} className="read-more">Read More</Link>
        <ArrowRightAlt className="article-cta-icon" />
      </div>
    </div>
  );
}

export default BlogArticle;