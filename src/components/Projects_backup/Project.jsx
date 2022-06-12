import React from "react";
import "./Project.css";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import { ReactComponent as Web } from "../../assets/icons/web.svg";

function Project(props) {
  const { name, image, description, github, link } = props;
  return (
    <li className="project">
      <img src={image} alt={name} />
      <div className="project-text">
        <p className="project-description">{description}</p>
        {github && (
          <a href={github} target="_blank" rel="noreferrer">
            <Github className="mr-5" />
          </a>
        )}
        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            <Web />
          </a>
        )}
      </div>
    </li>
  );
}

export default Project;
