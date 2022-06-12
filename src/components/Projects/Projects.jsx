import React, { useEffect, useState } from "react";
import "./Projects.css";
import projects from "../../utils/projects.json";
import Project from "./Project";

function Projects() {
  const [projectsName, setProjectsName] = useState([]);

  useEffect(() => {
    setProjectsName(Object.keys(projects));
  }, []);

  return (
    <div className="projects-container" id="projects">
      <p className="component-title">projects.</p>
      <div className="Projects">
        <ul className="projects-list">
          {projectsName.map((projectName, index) => {
            return (
              <Project
                key={index}
                name={projects[projectName].name}
                image={projects[projectName].image}
                languages={projects[projectName].languages}
                description={projects[projectName].description}
                github={projects[projectName].github}
                link={projects[projectName].link}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
