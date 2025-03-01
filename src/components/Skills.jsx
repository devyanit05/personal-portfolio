import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <div className="skills-category">
        <h3>Technical Skills</h3>
        <div className="skills-grid">
          {[
            "AWS (EC2, S3, IAM, VPC, ECS, EKS, Lambda, etc.)",
            "Docker",
            "Kubernetes (EKS, CKA)",
            "Terraform",
            "CloudFormation",
            "Jenkins",
            "GitLab CI/CD",
            "GitHub Actions",
            "Python",
            "Bash",
            "YAML",
            "Prometheus",
            "Grafana",
            "ELK Stack (Elasticsearch, Logstash, Kibana)",
            "Git",
            "Ansible",
          ].map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Tools</h3>
        <div className="skills-grid">
          {/* Map your tools here */}
          {[
            "AWS CLI",
            "kubectl",
            "Terraform CLI",
            "Git CLI",
            "VS Code",
            "Jira/Confluence",
            "Postman",
          ].map((tool, index) => (
            <div key={index} className="skill-item">
              {tool}
            </div>
          ))}
        </div>
      </div>

      <div className="skills-category">
        <h3>Soft Skills</h3>
        <div className="skills-grid">
          {/* Map your soft skills here */}
          {[
            "Problem-Solving",
            "Collaboration",
            "Communication",
            "Automation Mindset",
            "Continuous Learning",
            "Adaptability",
            "Attention to Detail",
            "Time Management",
            "Documentation",
          ].map((skill, index) => (
            <div key={index} className="skill-item">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
