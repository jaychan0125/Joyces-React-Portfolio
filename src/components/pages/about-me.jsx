import React from "react";
import "../../styles/about-me.css";

function AboutMe() {
  return (
    <div>
      <h2>About Me</h2>
      <div className="abt-me-container">
        <img
          src="/images/me.jpg"
          alt="photo of Joyce"
          height="190"
          width="150"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque,
          excepturi repudiandae hic maiores tenetur dicta quasi labore cum
          consequatur inventore repellat nulla eligendi quo laudantium at ullam
          debitis sunt mollitia.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
