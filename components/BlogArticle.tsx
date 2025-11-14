import { ArrowRightAlt, CalendarMonth } from '@mui/icons-material';
import Image from 'next/image';
import Link from 'next/link';

interface BlogArticleProps{
  image: string,
  title: string,
  datePublished: string,
  body: string,
  excerpt: string,
  href: string
}

const BlogArticle = (props: BlogArticleProps) => {
  const { image, title, datePublished, body, href, excerpt } = props;

  return (
    <div className="article">
      <div className="article-image-wrapper">
        <Image 
          src={image}
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
            <p className="text">{datePublished}</p>
          </span>
        </span>
      </div>
      <h3 className="article-title">{title}</h3>
      <p className="regular-text article-body">{excerpt}</p>
      <div className="article-cta">
        <Link href={href} className="read-more">Read More</Link>
        <ArrowRightAlt className="article-cta-icon" />
      </div>
    </div>
  );
}

export default BlogArticle;