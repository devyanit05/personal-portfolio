import React from 'react'
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa"; 


const ConnectSidebar = () => {
    return (
      <aside id="connect" className="connect-section">
        <div className="connect-icons">
          <a
            href="mailto:thokaldevyani123@gmail.com"
            className="connect-icon"
            aria-label="Email"
          >
            <FaEnvelope className="contact-icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/devyani-thokal/"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="contact-icon" />
          </a>
          <a
            href="https://github.com/devyanit05"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-icon"
            aria-label="GitHub"
          >
            <FaGithub className="contact-icon" />
          </a>
          <a
            href="https://twitter.com/devyanit05"
            target="_blank"
            rel="noopener noreferrer"
            className="connect-icon"
            aria-label="Twitter"
          >
            <FaTwitter className="contact-icon" />
          </a>
        </div>
      </aside>
    );
}

export default ConnectSidebar