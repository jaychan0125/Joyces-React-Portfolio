import React from "react";
import '../styles/nav-tags.css'

function NavTag({ currentPage, handleChangePage }) {
  return (
    <div>
      <nav className="nav-bar">
        <ul className="nav-tabs">
          <li className="nav-item">
            <a 
            href="#AboutMe" 
            onClick={() => handleChangePage("AboutMe")}
            className={currentPage === "AboutMe" ? 'nav-link active' : 'nav-link'}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a 
            href="#Portfolio" 
            onClick={() => handleChangePage("Portfolio")}
            className={currentPage === "Portfolio" ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="#ContactForm"
              onClick={() => handleChangePage("ContactForm")}
              className={currentPage === "ContactForm" ? 'nav-link active' : 'nav-link'}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a 
            href="#Resume" 
            onClick={() => handleChangePage("Resume")}
            className={currentPage === "Resume" ? 'nav-link active' : 'nav-link'}>
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavTag;
