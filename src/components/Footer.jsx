function Footer() {
  return (
    <footer className="section-footer flex flex-column">
      <div className="footer-cont flex flex-row">
        <div className="f-first-cont flex flex-column">
          <figure>
            <img src="./images/logo.svg" alt="Logo" className="logo" />
          </figure>
          <div className="social-link flex flex-row">
            <img src="./images/social/1.svg" alt="" className="link" />
            <img src="./images/social/2.svg" alt="" className="link" />
            <img src="./images/social/3.svg" alt="" className="link" />
            <img src="./images/social/4.svg" alt="" className="link" />
          </div>
        </div>
        <div className="f-second-cont flex flex-column">
          <h3>Pages</h3>
          <div className="f-link flex flex-column">
            <p className="link">About Us</p>
            <p className="link">Mentors</p>
            <p className="link">Sessions</p>
            <p className="link">Sign Up</p>
          </div>
        </div>
        <div className="f-third-cont flex flex-column">
          <h3>Contact</h3>
          <div className="f-address flex flex-column">
            <address>
              123 Main Street <br></br>City, State 12345
            </address>
            <div className="f-email">contact@mentorhub.com</div>
            <div className="f-number">(123) 456 - 7890</div>
          </div>
        </div>
      </div>
      <p className="f-copyright">© 2023 Mentor Hub. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
