function HeroSection() {
  return (
    <>
      <section className="section section-hero">
        <div className="container hero-cont">
          <div className="hero-data flex flex-column">
            <h2 className="hero-top-data common-heading">
              &quot;Unlock your potential as a <span>Mentor</span> and empower
              others to thrive.&quot;
            </h2>
            <div className="hero-btns flex flex-row">
              <div className="btn flex flex-row get-start">
                <div className="btn-data">Get Started as a Mentor</div>
                <img src="./images/arrow.svg" alt="-" />
              </div>
              <div className="btn flex flex-row learn-more">
                <div className="btn-data">Learn More</div>
                <img src="./images/arrow.svg" alt="-" />
              </div>
            </div>
          </div>
          <figure>
            <img src="./images/hero.svg" alt="Hero Pic" />
          </figure>
        </div>
      </section>
    </>
  );
}

export default HeroSection;
