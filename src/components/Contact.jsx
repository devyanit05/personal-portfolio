import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"; 

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact</h2>
      <p>
        I'm always open to new opportunities and collaborations. Feel free to
        reach out to me using the links below.
      </p>
      <div className="contact-info">
        <a
          href="mailto:thokaldevyani123@gmail.com"
          className="contact-link"
          aria-label="Email"
        >
          <FaEnvelope className="contact-icon" />
          thokaldevyani123@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/devyani-thokal/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="contact-icon" />
          linkedin.com/in/devyani-thokal/
        </a>
        <a
          href="https://github.com/devyanit05"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          aria-label="GitHub"
        >
          <FaGithub className="contact-icon" />
          github.com/devyanit05
        </a>
        <a
          href="https://twitter.com/devyanit05"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-link"
          aria-label="Twitter"
        >
          <FaTwitter className="contact-icon" />
          twitter.com/devyanit05
        </a>
      </div>
    </section>
  );
}

export default Contact;
