import React from "react";
import "../../styles/about-me.css";

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <div className="abt-me-container">
        <img className="my-pic" src="./images/me.jpg" alt="photo of Joyce" />

        <p className="abt-me-blub">
          Hello! My name is Joyce Chan, I am a full-stack web-development
          student in UofT SCS Coding Boot Camp. Prior to this program, I have
          been working multiple customer service roles such as an assistant
          manager at Sherwin Williams, and barista at Starbucks! I have decided
          it was time for a career change, and have since been honing my skills
          as a full-stack web-developer! I have developed projects using
          multiple technologies including express, node, MySQL, NoSQL, React,
          Restful APIs, and git. I am currently located in the Greater Toronto
          Area in Ontario. When I am not working, you can find me waterfall
          hunting, trying interesting restaurants, and testing multiple recipes,
          most recently for ice-cream!
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
