import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectItem = () => {
 
 const [projects, setProjects] =  useState([]);

 useEffect(()=> {
  fetch('/projects.json')
  .then(res => res.json())
  .then(data => setProjects(data))
 },[])

 
  /*  var imgBox = document.querySelectorAll(".website-img img");
  for (let i = 0; i < imgBox.length; i++) {
    imgBox[i].addEventListener("mouseenter", function (hover) {
      var imgHeight = this.scrollHeight;
      var scrollHeight = imgHeight - 300;
      hover.target.style.objectPosition = `0px -${scrollHeight}px`;
    });

    imgBox[i].addEventListener("mouseleave", function (hover) {
      hover.target.style.objectPosition = "0px 0px";
    });
  }
 */
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
      {
        projects.map((project , index) => <div key={project.id} className="col ">
        <div className="card h-100 shadow-lg">
          <div className="image-wrap w-100">
            <img
              src={project.image}
              className="img-fluid"
              alt="liveLink"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title text-center">{project.name}</h5>

            <div className="text-center">

            <Link to={`project/${project.id}`}
                className="btn btn-primary my-3"
                
              >
                View Details
              </Link>
              
            </div>

          </div>
        </div>
      </div> )
      }
      
 
  

 

{/* end */}
    </div>
  );
};

export default ProjectItem;
