import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { ReactComponent as Linkedin } from "../../assets/icons/linkedin.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import Container from "../UI/Container";

function Navbar() {
  const [classes, setClasses] = useState("Navbar-wrapper");
  const scrollHandler = () => {
    if (window.scrollY > 5) setClasses("Navbar-wrapper active");
    else setClasses("Navbar-wrapper");
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  });

  return (
    <div className={classes}>
      <Container>
        <div className="Navbar">
          <Link to="/" className="dark-blue-color">
            <p className="name">Stan Cătălin</p>
          </Link>
          <ul className="navbar-buttons">
            <li>
              <a href="#about" className="dark-blue-color">
                About
              </a>
            </li>
            <li>
              <a href="#projects" className="dark-blue-color">
                Projects
              </a>
            </li>
            <li>
              <a href="#contact" className="dark-blue-color">
                Contact
              </a>
            </li>
          </ul>
          <ul className="social">
            <li className="mr-5">
              <a
                href="https://www.linkedin.com/in/catalinstan99/"
                target="_blank"
                rel="noreferrer"
              >
                <Linkedin />
              </a>
            </li>
            <li>
              <a
                href="http://www.github.com/catastan99"
                target="_blank"
                rel="noreferrer"
              >
                <Github />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
