import React from "react";
import certificationsData from "../data/certifications.json";
import pagerdutyImage from "../assets/images/pagerduty.png";
import dockerImage from "../assets/images/docker.png";
import cucumberImage from "../assets/images/cucumber.png"
import typescriptImage from "../assets/images/typescript.png";

function Certifications() {

  const imageImports = {
    "pagerduty.png": pagerdutyImage,
    "docker.png": dockerImage,
    "cucumber.png": cucumberImage,
    "typescript.png": typescriptImage
    // "aws-certified.png": awsCertified,
    // "kubernetes-certified.png": kubernetesCertified,
    // Add all your image imports here...
  };

  return (
    <section id="certifications" className="certifications-section">
      <h2>Certifications</h2>
      <div className="certifications-grid">
        {certificationsData.map((cert, index) => (
          <div key={index} className="cert-card">
            <div className="cert-image-container">
              <img
                src={imageImports[cert.image] || cert.image}
                alt={cert.name}
              />
            </div>
            <h3>{cert.name}</h3>
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="view-cert-button"
            >
              View Certificate
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
