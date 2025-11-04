import BlogArticle from "@/components/BlogArticle";
import ProgramCard from "@/components/ProgramCard";
import Image from "next/image";
import Link from "next/link";
import homeContent from "@/static/data/homeContent";

export default function Home() {
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
          <BlogArticle 
            articleId="1"
          />
          <BlogArticle 
            articleId="1"
          />
          <BlogArticle 
            articleId="1"
          />
        </div>
        <div className="latest-articles-cta-wrapper">
          <Link href="/blog" className="btn">View All Articles</Link>
        </div>
      </section>

      <section className="programs">
        <h3 className="section-title">Upcoming Programs</h3>
        <div className="container">
          <ProgramCard />
          <ProgramCard />
          <ProgramCard />
        </div>
      </section>
    </div>
  );
}
