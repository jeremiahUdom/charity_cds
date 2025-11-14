const NewsletterSubscription = () => {
  return (
    <section className="stay-connected">
      <div className="container">
        <h2 className="stay-connected-title">Stay Connected with Our Mission</h2>
        <p className="regular-text subtext">Join our community and receive inspiring stories, impact updates, and ways you can make a difference directly in your inbox.</p>
        <form className="stay-connected-form">
          <div className="form-fields">
            <div className="form-group">
              <label htmlFor="first-name" className="input-label">First Name</label>
              <input type="text" id="first-name" name="fisrt-name" className="input-field" required placeholder="e.g Jane"  />
            </div>
            <div className="form-group">
              <label htmlFor="last-name" className="input-label">Last Name</label>
              <input type="text" id="last-name" name="last-name" className="input-field" required placeholder="e.g Doe" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="input-label">Email</label>
              <input type="email" id="email" name="email" className="input-field" required placeholder="e.g subscriber@gmail.com" />
            </div>
          </div>
          <button className="btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default NewsletterSubscription;