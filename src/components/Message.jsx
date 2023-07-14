function Message() {
  return (
    <section className="section section-msg">
      <div className="container">
        <div className="flex flex-column mentor-cont">
          <h2 className="common-heading">Hear from Our Mentors</h2>
          <div className="msgs-cont flex flex-row">
            <div className="msg-box flex flex-column">
              <div className="mentor-info flex flex-row">
                <figure>
                  <img src="./images/mentor/1.svg" alt="Loading..." />
                </figure>
                <div className="mentor-data flex flex-column">
                  <h4>Malini sindhu</h4>
                  <h5>chennai , INDIA</h5>
                </div>
              </div>
              <div className="msg">
                &quot;Being a mentor on Mentor Hub has been an incredibly
                rewarding experience. I&apos;ve had the opportunity to share my
                knowledge and guide aspiring professionals in their career
                journeys.”
              </div>
            </div>
            <div className="msg-box flex flex-column">
              <div className="mentor-info flex flex-row">
                <figure>
                  <img src="./images/mentor/2.svg" alt="Loading..." />
                </figure>
                <div className="mentor-data flex flex-column">
                  <h4>Archana Nair</h4>
                  <h5>kerala , INDIA</h5>
                </div>
              </div>
              <div className="msg">
                &quot;Mentor Hub has exceeded my expectations. The
                platform&apos;s user-friendly design and comprehensive profile
                customization options have allowed me to showcase my expertise
                and build credibility with mentees”.
              </div>
            </div>
            <div className="msg-box flex flex-column">
              <div className="mentor-info flex flex-row">
                <figure>
                  <img src="./images/mentor/3.svg" alt="Loading..." />
                </figure>
                <div className="mentor-data flex flex-column">
                  <h4>Deepak Dinesh</h4>
                  <h5>chennai , INDIA</h5>
                </div>
              </div>
              <div className="msg">
                &quot;As a mentor on Mentor Hub, I&apos;ve been able to connect
                with mentees from around the world, bridging geographical
                boundaries. The platform&apos;s robust search functionality and
                categorization have made it easy for mentees to find me based on
                their specific needs.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Message;
