import React from "react";
import AboutItem from "./AboutItem";
import "./About.css";

const aboutItems = [
  {
    id: 1,
    image:
      "https://upload.wikimedia.org/wikipedia/ro/thumb/5/51/Logo_Universitatea_Politehnica_din_Bucure%C8%99ti.svg/1200px-Logo_Universitatea_Politehnica_din_Bucure%C8%99ti.svg.png",
    from: "09-2017",
    to: "06-2021",
    name: "Student - Politehnica University",
    text: "Graduated with a Bachelor Degree in Computer Science and Mathematics at Faculty of Applied Sciences ",
  },
  {
    id: 2,
    image:
      "data:image/png;base64,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",
    from: "08-2021",
    to: "02-2022",
    name: "Survey Operator - Ipsos Interactive Services",
    text: "Responsibilities: Creating the set up for the online surveys and checking the quality of the surveys",
  },
  {
    id: 3,
    image: "https://i.ibb.co/rmwwSPn/codezilla.jpg",
    from: "02-2022",
    to: "Present",
    name: "Content Manager - Codezilla",
    text: "Managing the content of product description pages for Dyson",
  },
];

function About() {
  return (
    <div className="About" id="about">
      <p className="component-title">about.</p>
      <p className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet vulputate
        tristique quam felis. Id phasellus dui orci vulputate consequat nulla
        proin. Id sit scelerisque neque, proin bibendum diam.
      </p>
      <ul className="about-items-list">
        {aboutItems.map((item) => {
          return (
            <AboutItem
              key={item.id}
              text={item.text}
              name={item.name}
              from={item.from}
              to={item.to}
              image={item.image}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default About;
