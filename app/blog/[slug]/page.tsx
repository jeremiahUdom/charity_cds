import { client } from '@/sanity/client';
import { urlFor } from '@/sanity/imageBuilder';
import { fetchContent } from '@/sanity/lib/fetchers';
import { ARTICLE_QUERY } from '@/sanity/queries/articles';
import { CalendarMonth } from '@mui/icons-material';
import { PortableText, SanityDocument } from 'next-sanity';
import Image from 'next/image';

type Params = Promise<{ slug: string }>

const Page = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const article = await fetchContent<SanityDocument>(ARTICLE_QUERY, { slug: slug });

  console.log(article);
  
  return (
    <div className="article-page">
      <div className="container">
        <h1 className="article-title">{article.title}</h1>
      </div>

      <div className="container article-date article-meta-data">
        <span className="icon">
          <CalendarMonth />
        </span>
        <span className="text">
          <p>{new Date(article._createdAt).toLocaleDateString("en-us", {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</p>
        </span>
      </div>

      <div className="container">
        <div className="article-full-img-wrapper">
          <Image 
            src={urlFor(article.coverImage).url()}
            alt="Article image"
            fill
            className="article-image"
          />
        </div>
      </div>

      <section className="article-body-full">
        <div className="container">
          <div className="body-text">
            <PortableText value={article.body} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page;