import TeamMember from '@/components/TeamMember'
import aboutContent from '@/static/data/aboutContent'
import Image from 'next/image'
import React from 'react'

const index = () => {
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
            <p className="regular-text">{aboutContent.text}</p>
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
              <TeamMember />
              <TeamMember />
              <TeamMember />
            </div>
          </div>
      </section>
    </div>
  )
}

export default index