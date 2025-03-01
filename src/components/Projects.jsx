import React, { useState, useEffect } from "react";
import projectsData from "../data/projects.json";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null); 

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projectsData);
    } else {
      setFilteredProjects(
        projectsData.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="category-filters">
        {[
          "All",
          "Electronics",
          "DevOps",
          "Web Development",
          "Data Science",
        ].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={selectedCategory === category ? "active" : ""}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="project-grid">
        {filteredProjects.map((project) => (
          <div
            key={project.title}
            className="project-card"
            onClick={() => handleProjectClick(project)}
          >
            <h3>{project.title}</h3>
            <p>{project.shortDescription}</p>
            <p>
              <strong>Technologies:</strong> {project.technologies}
            </p>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <p>
              <strong>Technologies:</strong> {selectedProject.technologies}
            </p>
            <p>
              <strong>Link:</strong>{" "}
              <a href={selectedProject.link}>{selectedProject.link}</a>
            </p>
            <p>{selectedProject.description}</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
