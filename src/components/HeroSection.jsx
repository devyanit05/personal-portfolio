import React from "react";
import ProfilePic from "../assets/images/profile_pic.jpg";

function HeroSection() {
  return (
    <section id="hero" className="hero section">
      <div class="hero-content">
        <h1>Devyani Thokal</h1>
        <p class="headline">
          DevOps Engineer | Automating Infrastructure, Accelerating Delivery
        </p>
        <p class="description">
          Engineering-driven DevOps professional skilled in automation, CI/CD
          pipelines, infrastructure as code, and cloud-native solutions. Proven
          ability to enhance system reliability and accelerate software
          deployment. Proficient in Docker, Kubernetes, AWS DevOps, Terraform.
        </p>
        <a
          href="https://www.linkedin.com/in/devyani-thokal/"
          class="cta"
          target="_blank"
          rel="noopener noreferrer"
        >
          Connect on LinkedIn
        </a>
      </div>
      <div class="hero-image">
        <img src={ProfilePic} alt="Devyani Thokal" />
      </div>
    </section>
  );
}

export default HeroSection;
