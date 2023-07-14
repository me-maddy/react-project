function About() {
  return (
    <section className="section about-section">
      <div className="container about-cont flex flex-row">
        <div className="about-data flex flex-column">
          <h2 className="common-heading">At Mentor Hub</h2>
          <p>
            we believe in the power of mentorship. We provide a platform where
            passionate individuals like you can share your expertise and make a
            positive impact on others. Whether you&apos;re an experienced
            professional, an industry expert, or a seasoned entrepreneur, Mentor
            Hub offers you the opportunity to connect with mentees, guide them
            on their journey, and shape their future.
          </p>
          <div className="btn flex flex-row get-start">
            <div className="btn-data">Learn More</div>
            <img src="./images/arrow.svg" alt="-" />
          </div>
        </div>
        <div className="about-img"></div>
      </div>
    </section>
  );
}

export default About;
