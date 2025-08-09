import React from "react";
import certificationsData from "../data/certifications.json";
import DevOpsImage from "../assets/images/devops_png.png";
import DockerImage from "../assets/images/docker_png.png";
import CucumberImage from "../assets/images/cucumber_png.png"
import TypescriptImage from "../assets/images/typescript_png.png";
import GitHubImage from "../assets/images/github_png.png";
import AwsImage from "../assets/images/aws_png.png";
import UdemyImage from "../assets/images/udemy_png.png";

function Certifications() {

  const imageImports = {
    "devops_png.png": DevOpsImage,
    "docker_png.png": DockerImage,
    "cucumber_png.png": CucumberImage,
    "typescript_png.png": TypescriptImage,
    "aws_png.png": AwsImage,
    "github_png.png": GitHubImage,
    "udemy_png.png": UdemyImage,
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
