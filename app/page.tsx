import BlogArticle from "@/components/BlogArticle";
import EventCard from "@/components/EventCard";
import Image from "next/image";
import Link from "next/link";
import homeContent from "@/static/data/homeContent";
import { fetchContent } from "@/sanity/lib/fetchers";
import { ARTICLES_QUERY } from "@/sanity/queries/articles";
import { EVENTS_QUERY } from "@/sanity/queries/events";
import { urlFor } from "@/sanity/imageBuilder";
import { SanityDocument } from "next-sanity";
import { client } from "@/sanity/client";

export default async function Home() {
  const articles = await fetchContent(ARTICLES_QUERY);
  const events = await fetchContent(EVENTS_QUERY);

  return(
    <div className="home">
      <section className="hero">
        <div className="overlay">
          <div className="container">
            <div className="hero-text">
              <h1 className="hero-headline">{homeContent.hero.headline}</h1>
              <p className="regular-text">{homeContent.hero.subtext}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <h2 className="section-title">About Us</h2>
        <div className="container">
          <div className="about-item">
            <h3 className="about-subtitle">{homeContent.aboutPreview.title}</h3>
            <p className="regular-text about-body">{homeContent.aboutPreview.subtext}</p>
          </div>
          <div className="about-item about-img-wrapper">
            <Image
              src={homeContent.aboutPreview.image}
              alt="Volunteers organizing food donations at a community outreach event"
              fill
              className="about-image"
            />
          </div>
        </div>
      </section>

      <section className="latest-articles">
        <h2 className="section-title">Latest Blog</h2>
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
        <div className="latest-articles-cta-wrapper">
          <Link href="/blog" className="btn">View All Articles</Link>
        </div>
      </section>

      <section className="upcoming-events">
        <h3 className="section-title">Upcoming Events</h3>
          <div className="grid">
            <div className="container">
              {
                events.length !== 0 ? events.map((event: SanityDocument) => (
                  <EventCard
                    key={event._id}
                    title={event.title}
                    description={event.description}
                    date={new Date(event.starts).toLocaleDateString("en-us", {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                    venue={event.venue}
                    startTime={new Date(event.starts).toLocaleTimeString()}
                    endTime={new Date(event.ends).toLocaleTimeString()}
                  />
                )) : <p className="empty-state">No upcoming event</p>
              }
            </div>
          </div>
      </section>
    </div>
  );
}
