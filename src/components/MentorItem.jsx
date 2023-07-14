import { PropTypes } from "prop-types";

function MentorItem({ name, role, img, fb, twitter, linkdin }) {
  return (
    <div className="mentor-cont flex flex-column">
      <figure>
        <img src={img} alt="Loading..." />
      </figure>
      <div className="about-mentor flex flex-column">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
      <div className="mentor-social flex flex-row">
        <img src={fb} alt="Loading..." />
        <img src={twitter} alt="Loading..." />
        {linkdin ? <img src={linkdin} alt="Loading..." /> : ""}
      </div>
    </div>
  );
}

MentorItem.propTypes = {
  name: PropTypes.string,
  role: PropTypes.string,
  img: PropTypes.string,
  fb: PropTypes.string,
  twitter: PropTypes.string,
  linkdin: PropTypes.string,
};

export default MentorItem;
