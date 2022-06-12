import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="Hero">
      <div className="hero-text">
        <p className="small-text" id="hero-text-1">
          Hello, I’m Cătălin,
        </p>
        <p className="big-text" id="hero-text-2">
          CONTENT
          <br />
          MANAGER
        </p>
        <p className="small-text" id="hero-text-3">
          based in Bucharest
        </p>
        <button className="btn">Resume</button>
      </div>
      <div className="hero-img"></div>
    </div>
  );
}

export default Hero;
