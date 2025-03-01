import React from "react";
import experienceData from "../data/experience.json";

function Experience() {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      {experienceData.map((job, index) => (
        <div key={index} className="job-card">
          <div className="job-header">
            <h3>{job.jobTitle}</h3>
            <h4>
              {job.companyName}, {job.location}
            </h4>
          </div>
          <div className="job-details">
            <p>
              <strong>Duration:</strong> {job.duration}
            </p>
            <p>
              <strong>Tech Stack:</strong> {job.techStack}
            </p>
            <div className="responsibilities">
              <strong>Responsibilities and Achievements:</strong>
              <ul>
                {job.responsibilities.map((responsibility, idx) => (
                  <li key={idx}>{responsibility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Experience;
