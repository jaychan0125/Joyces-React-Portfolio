import React, { useEffect, useState } from "react";
import projects from "../../utils/API";      //API for my github
import ProjectList from "./projectList";    //the name and links for the repo and deployed

function Portfolio() {
  const [results, setResults] = useState([]); //set results as empty array

  const searchProjects = async () => {
    const response = await projects();
    // console.log(response.data);   //an array of project objects
    const projsArray = response.data.map((repo) => {
      return {
        name: repo.name,
        url: repo.html_url,
        deployed: repo.has_pages,
      };
    });
    setResults(projsArray);       //setResults method to change results variable to response.data.data,  cannot console.log(results) here because the API call hasn't happened yet .: returns empty array
  };

  useEffect(() => {
    searchProjects();         //make the API call
  }, []);                     //only API call once upon load to search for projects 

  useEffect(() => {
    console.log(results)      //logs updated results when it changes
  }, [results]);              //rerenders only if results change

  return (
    <div>
      <h2>Projects</h2>
        <ProjectList results={results} />
    </div>
  );
}

export default Portfolio;
