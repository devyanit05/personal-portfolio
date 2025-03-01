import React from "react";
import { FaGithub, FaTwitter, FaArrowUp } from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        {" "}
        {/* Added a wrapper div */}
        <p>© {currentYear} Devyani Tookl. All Rights Reserved.</p>
        <div className="social-media-icons">
          <a
            href="https://github.com/devyanit05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="social-icon" />
          </a>
          <a
            href="https://twitter.com/devyanit05"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className="social-icon" />
          </a>
        </div>
      </div>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="back-to-top"
        aria-label="Back to Top"
      >
        <FaArrowUp />
      </button>
    </footer>
  );
}

export default Footer;
