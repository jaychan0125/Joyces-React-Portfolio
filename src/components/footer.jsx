import React from "react";

function Footer() {
  return (
    <div className="footer">
      <ul className="social-links">
        <li>
          <a
            href="https://github.com/jaychan0125"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="images/github-mark.png"
              alt="GitHub icon."
              className="contact-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/joyce-chan-555465267/"
            target="_blank"
            rel="noreferrer"
            >
            <img
              src="images/Linkedin-logo-on-transparent-Background-PNG-.png"
              alt="LinkedIn logo."
              className="contact-icon"
            />
          </a>
        </li>
        <li>
          <a
            href="https://dev.to/jaychan0125"
            target="_blank"
            rel="noreferrer"
            >
            <img
              src="images/dev-logo.png"
              alt="Dev To icon."
              className="contact-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
