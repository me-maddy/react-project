import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header className="header">
      <NavLink to="/">
        <img src="./images/logo.svg" alt="Logo" className="logo" />
      </NavLink>
      <nav className="navbar">
        <ul className="link-lists">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink to="/mentor" className="nav-link">
              Mentors
            </NavLink>
          </li>
          <li>
            <NavLink to="/session" className="nav-link">
              Sessions
            </NavLink>
          </li>
        </ul>
      </nav>
      <NavLink to="/sign">
        <div className="sign-area">
          <div className="user">
            <div className="upper-part"></div>
            <div className="lower-part"></div>
          </div>
          <div className="sign-up">Sign Up</div>
        </div>
      </NavLink>
    </header>
  );
}

export default Navbar;
