import React from "react";
import "./AboutItem.css";

function AboutItem(props) {
  const { text, name, from, to, image } = props;
  return (
    <div className="AboutItem">
      <div className="about-item-img">
        <img src={image} alt="logo" />
      </div>
      <div className="about-item-text">
        <p className="about-item-date">
          From {from} {to !== "Present" ? `to ${to}` : null}
        </p>
        <p className="description">{name}</p>
        <p className="">{text}</p>
      </div>
    </div>
  );
}

export default AboutItem;
