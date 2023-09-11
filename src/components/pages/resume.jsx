import React from "react";
import Button from "@mui/material/Button";
import "../../styles/resume.css";

function Resume() {
  return (
    <div className="resume-container">
      <h2>Resume</h2>
      <div className="resume-content">
        <div className="resume-notes">
          <a
            href="/JOYCE CHAN Resume.pdf"
            download="Joyce's Resume"
            target="_blank"
            rel="noreferrer"
          >
            <Button className="resume-button" size="small">
              Download Joyce's Resume.pdf
            </Button>
          </a>
          <h3>Technologies Used:</h3>
          <ul>
            <li>JavaScript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>FlexBox</li>
            <li>Bootstrap</li>
            <li>APIs</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>Handlebars</li>
            <li>MySQL</li>
            <li>Sequelize</li>
            <li>NoSQL</li>
            <li>Mongoose</li>
            <li>MongoDB</li>
            <li>Model-View-Controller</li>
            <li>React</li>
          </ul>
        </div>
        <img src="./images/resume.png" alt="first page of resume" style={{}} />
      </div>
    </div>
  );
}

export default Resume;
