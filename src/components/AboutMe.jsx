import React from "react";

function AboutMe() {
  return (
    <section id="about" className="about-section section">
      <h2>About Me</h2>
      <p>
        With a foundation in system architecture and a career rooted in DevOps,
        I focus on optimizing infrastructure and accelerating software delivery.
        My work revolves around building scalable, reliable systems using tools
        like Kubernetes, Docker, and OpenShift for container orchestration,
        along with Terraform, CloudFormation, and AWS CDK for Infrastructure as
        Code. I specialize in automation, CI/CD pipelines, and cloud-native
        monitoring solutions, helping teams deliver faster and with greater
        stability. Passionate about continuous learning, I thrive in
        collaborative environments where solving complex challenges leads to
        lasting impact and innovation.
      </p>
      <h3>Key Skills Summary</h3>
      <div className="skills-box">
        <ul>
          <li>Containerization: Docker, ECS, ECR </li>
          <li>Orchestration: Kubernetes, OpenShift, Helm</li>
          <li>Cloud Platforms: AWS DevOps (EC2, S3, IAM, ECS, Lambda, etc.)</li>
          <li>Infrastructure as Code: Terraform, CloudFormation</li>
          <li>CI/CD Pipelines: Jenkins, GitLab CI/CD</li>
          <li>Scripting: Python, Bash, YAML, JSON</li>
          <li>Monitoring and Logging: Prometheus, Grafana, AWS CloudWatch</li>
          <li>Version Control: Git, AWS CodeCommit</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutMe;
