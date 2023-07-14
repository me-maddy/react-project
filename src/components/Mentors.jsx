import MentorItem from "./MentorItem";
import Navbar from "./Navbar";

const data = [
  {
    name: "Shalini",
    role: "Software Developer",
    img: "./images/mentor/section/1.svg",
    fb: "./images/social/1.svg",
    twitter: "./images/social/2.svg",
  },
  {
    name: "Rekha Sekar",
    role: "Manager",
    img: "./images/mentor/section/2.svg",
    fb: "./images/social/1.svg",
    twitter: "./images/social/2.svg",
    linkdin: "./images/social/3.svg",
  },
  {
    name: "Deepak",
    role: "UX Designer",
    img: "./images/mentor/section/3.svg",
    fb: "./images/social/1.svg",
    twitter: "./images/social/2.svg",
  },
  {
    name: "Naveen",
    role: "Architect",
    img: "./images/mentor/section/4.svg",
    fb: "./images/social/1.svg",
    twitter: "./images/social/2.svg",
  },
  {
    name: "Sofia",
    role: "Business Strategist",
    img: "./images/mentor/section/5.svg",
    fb: "./images/social/1.svg",
    twitter: "./images/social/2.svg",
  },
  {
    name: "Madhumita",
    role: "Content Writer",
    img: "./images/mentor/section/6.svg",
    fb: "./images/social/1.svg",
    twitter: "./images/social/2.svg",
    linkdin: "./images/social/3.svg",
  },
  {
    name: "Nirmal",
    role: "Electrical Engineer",
    img: "./images/mentor/section/7.svg",
    fb: "./images/social/1.svg",
    twitter: "./images/social/2.svg",
  },
  {
    name: "Lokesh",
    role: "Software Engineer",
    img: "./images/mentor/section/8.svg",
    fb: "./images/social/1.svg",
    twitter: "./images/social/2.svg",
  },
];

function Mentors() {
  return (
    <>
      <Navbar />
      <section className="section section-mentor">
        <div className="container flex flex-column">
          <h2 className="common-heading">Our Mentors</h2>
          <div className="mentor-items">
            {data.map((currEle, index) => {
              return <MentorItem {...currEle} key={index} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Mentors;
