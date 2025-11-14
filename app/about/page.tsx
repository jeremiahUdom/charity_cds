import NewsletterSubscription from '@/components/NewsletterSubscription';
import TeamMember from '@/components/TeamMember';
import { urlFor } from '@/sanity/imageBuilder';
import { fetchContent } from '@/sanity/lib/fetchers';
import { TEAM_QUERY } from '@/sanity/queries/team';
import aboutContent from '@/static/data/aboutContent';
import Image from 'next/image';

const page = async () => {
  const teamMembers = await fetchContent(TEAM_QUERY);

  return (
    <div className="page about-page">
      <section className="page-banner">
        <div className="overlay">
          <div className="container">
            <h1 className="main-header">
              <span className="accent-bar"></span>
              About Us
            </h1>
          </div>
        </div>
      </section>

      <section className="who-we-are">
        <div className="container">
          <div className="about-item about-text">
            {
              aboutContent.aboutParagraphs.map((paragraph, index) => (
                <p className="regular-text" key={index}>{paragraph}</p>
              ))
            }
          </div>
          <div className="about-item about-img-wrapper">
            <Image
              src={aboutContent.image}
              alt="Volunteers organizing food donations at a community outreach event"
              fill
              className="about-image"
            />
          </div>
        </div>
      </section>

      <section className="our-team">
        <h2 className="section-title">Meet Our Team</h2>
          <div className="grid">
            <div className="container">
              {
                teamMembers.length !== 0 ? teamMembers.map((member) => (
                  <TeamMember 
                    key={member._id}
                    name={member.fullName}
                    role={member.role}
                    imgUrl={urlFor(member.image).url()}
                  />
                ))    
                : <p className="empty-state">No team members added yet</p>
              }
            </div>
          </div>
      </section>
      <NewsletterSubscription />
    </div>
  )
}

export default page;