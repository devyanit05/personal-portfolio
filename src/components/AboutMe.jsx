import React from "react";

function AboutMe() {
  return (
    <section id="about" className="about-section section">
      <h2>About Me</h2>
      <p>
        With a foundation in system architecture from my engineering studies,
        I’ve built a career around optimizing infrastructure and streamlining
        software delivery. My journey into DevOps has been driven by a passion
        for building scalable, reliable systems and enabling teams to deliver
        faster and more efficiently. I specialize in automation, CI/CD
        pipelines, and performance tuning, and I thrive in collaborative
        environments where solving complex challenges leads to meaningful
        impact. Always learning, always improving—my goal is to create systems
        that support innovation and growth.
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
