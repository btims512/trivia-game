// Footer.js
import React from "react";
import GitHubLogo from "../assets/icon-github.png";
import LinkedInLogo from "../assets/icon-linkedin.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          Built by{" "}
          <a
            href="https://bentims.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ben Tims
          </a>
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/btims512"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubLogo} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/benjamintims/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={LinkedInLogo} alt="LinkedIn" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
