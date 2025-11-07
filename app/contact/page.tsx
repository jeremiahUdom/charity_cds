import ContactOptions from '@/components/ContactOptions';

const page = () => {
  return (
    <div className="page contact-page">
      <section className="page-banner">
        <div className="overlay">
          <div className="container">
            <h1 className="main-header">
              <span className="accent-bar"></span>
              Get In Touch
            </h1>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="container">
          <div className="contact-card">
            <h2 className="section-header">Contact Us</h2>
            <p className="regular-text">We&apos;d love to hear from you! Whether you have questions, suggestions, or would like to get involved, feel free to reach out using the contact details below.</p>
            <div>
              <ContactOptions />
            </div>
          </div>
          <div className="contact-card">
            <form action="" className="contact-form">
              <h2 className="section-header">Send Us a Quick Message</h2>
              <div className="form-group">
                <label htmlFor="name" className="label">Name</label>
                <input type="text" id="name" name="name" className="input-field" required />
              </div>
              <div className="form-group">
                <label htmlFor="email" className="label">Email</label>
                <input type="email" id="email" name="email" className="input-field" required />
              </div>
              <div className="form-group">
                <label htmlFor="message" className="label">Message</label>
                <textarea id="message" name="message" rows={10} required></textarea>
              </div>
              <button type="submit" className="btn contact-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;