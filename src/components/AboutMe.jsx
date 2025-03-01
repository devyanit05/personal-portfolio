import React from "react";

function AboutMe() {
  return (
    <section id="about" className="about-section section">
      <h2>About Me</h2>
      <p>
        From my early days exploring the intricacies of system architecture
        during my engineering studies, I've always been driven by a passion for
        creating efficient and reliable systems. This curiosity led me to the
        dynamic world of DevOps, where I found a perfect blend of engineering
        principles and cutting-edge technology. My career journey has been about
        continuously learning and adapting, mastering the art of automating
        infrastructure and streamlining software delivery. I thrive on solving
        complex problems and collaborating with teams to build robust, scalable
        solutions that drive innovation. My motivation stems from the
        satisfaction of seeing systems perform at their peak and enabling teams
        to deliver software faster and more reliably.
      </p>
      <h3>Key Skills Summary</h3>
      <div className="skills-box">
        <ul>
          <li>Containerization: Docker</li>
          <li>Orchestration: Kubernetes</li>
          <li>Cloud Platforms: AWS DevOps (EC2, S3, IAM, etc.)</li>
          <li>Infrastructure as Code: Terraform</li>
          <li>CI/CD Pipelines: Jenkins, GitLab CI/CD</li>
          <li>Scripting: Python, Bash</li>
          <li>Monitoring and Logging: Prometheus, Grafana, ELK Stack</li>
          <li>Version Control: Git</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
