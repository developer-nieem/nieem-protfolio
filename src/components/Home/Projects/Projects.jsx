import React from "react";
import ProjectItem from "./projectItem";

const Projects = () => {
  return (
    <div id="projects" className="bg-light h-100">
       <div className="container py-5">
       <h4 className="text-center text-danger">Projects</h4>
        <h2 className="text-center">My Amazing Works</h2>
      <div >
       <ProjectItem ></ProjectItem>
     
      </div>
       </div>
    </div>
  );
};

export default Projects;
