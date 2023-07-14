function AboutMentor() {
  return (
    <section className="section section-more">
      <div className="container flex flex-column">
        <h2 className="common-heading">Explore Diverse Mentorship Areas</h2>
        <div className="title-cont flex flex-row">
          <div className="heading flex flex-column">
            <h3>Business and Entrepreneurship</h3>
            <p>
              Dive into the world of business and entrepreneurship. Our mentors
              in this area can provide valuable insights on topics like business
              strategy, marketing, finance, startups, leadership, and innovation
            </p>
            <div className="flex flex-row btn">
              <div className="btn-data">Read More</div>
              <img src="./images/arrow.svg" alt="-" />
            </div>
          </div>

          <div className="heading flex flex-column">
            <h3>Arts and Creativity</h3>
            <p>
              Unleash your creative potential with our mentors in the arts and
              creativity. Whether you&apos;re passionate about visual arts,
              writing, music, photography, or performing arts, our mentors can
              provide you with the necessary guidance and inspiration.
            </p>
            <div className="flex flex-row btn">
              <div className="btn-data">Read More</div>
              <img src="./images/arrow.svg" alt="-" />
            </div>
          </div>

          <div className="heading flex flex-column">
            <h3>Technology</h3>
            <p>
              Enhance your skills in the ever-evolving field of technology. Our
              technology mentors can guide you in areas such as software
              development, web design, data science, cybersecurity, artificial
              intelligence, and more
            </p>
            <div className="flex flex-row btn">
              <div className="btn-data">Read More</div>
              <img src="./images/arrow.svg" alt="-" />
            </div>
          </div>
        </div>
        <div className="btn flex flex-row get-start">
          <div className="btn-data">Find Your Mentor</div>
          <img src="./images/arrow.svg" alt="-" />
        </div>
      </div>
    </section>
  );
}

export default AboutMentor;
