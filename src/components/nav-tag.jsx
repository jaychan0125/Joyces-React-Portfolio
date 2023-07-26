import React from "react";
import '../styles/nav-tags.css'

function NavTag({ curretPage, handleChangePage }) {
  return (
    <div>
      <nav className="nav-bar">
        <ul className="nav-tabs">
          <li className="nav-item">
            <a 
            href="#AboutMe" 
            onClick={() => handleChangePage("AboutMe")}
            className={curretPage === "AboutMe" ? 'nav-link active' : 'nav-link'}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a 
            href="#Portfolio" 
            onClick={() => handleChangePage("Portfolio")}
            className={curretPage === "Portfolio" ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#ContactForm"
              onClick={() => handleChangePage("ContactForm")}
              className={curretPage === "ContactForm" ? 'nav-link active' : 'nav-link'}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a 
            href="#Resume" 
            onClick={() => handleChangePage("Resume")}
            className={curretPage === "Resume" ? 'nav-link active' : 'nav-link'}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTag;
