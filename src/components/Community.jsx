function Community() {
  return (
    <section className="section section-commu">
      <div className="container flex flex-row">
        <div className="commu-img"></div>
        <div className="commu-data flex flex-column">
          <h2 className="common-heading">Join Our Community of Mentors</h2>
          <p>
            Becoming a mentor on Mentor Hub is quick and easy. Follow these
            simple steps to get started.
          </p>
          <div className="btn flex flex-row get-start">
            <div className="btn-data">Learn More</div>
            <img src="./images/arrow.svg" alt="-" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Community;
