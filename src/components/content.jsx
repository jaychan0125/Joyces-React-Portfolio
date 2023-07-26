import React, { useState } from "react";
import AboutMe from "./pages/about-me";
import Portfolio from "./pages/portfolio";
import ContactForm from "./pages/contact";
import Resume from "./pages/resume";
import NavTag from "./nav-tag";

function Content() {
  const [currentPage, setCurrentPage] = useState("AboutMe");  //upon load, default content is AboutMe

  const renderPage = () => {
    if (currentPage === "AboutMe") {
      return <AboutMe />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
    if (currentPage === "ContactForm") {
      return <ContactForm />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
  };

  const handleChangePage = (page) => setCurrentPage(page);

  return (
    <div className="App">
      <NavTag currentPage={currentPage} handleChangePage={handleChangePage} />
      {renderPage()}
    </div>
  );
}

export default Content;
