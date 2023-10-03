import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const ProjectItem = () => {
  const [projects, setProjects] = useState([]);
  const [activeTab, setActiveTab] = useState("all");

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        const project = activeTab === 'all' ? data : data.filter(item => item.category === activeTab);
        
          setProjects(project);
        
       
      });
  }, [activeTab]);

  const handleTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="text-center mt-5">
        <button onClick={() => handleTab("all")} className={`btn fs-5 ${activeTab == 'all' ? 'btn-primary' : ''}`}>
          All
        </button>
        <button
          onClick={() => handleTab("Front End Development")}
          className={`btn fs-5 ${activeTab == 'Front End Development' ? 'btn-primary' : ''}`}
        >
          Front End Development
        </button>
        <button
          onClick={() => handleTab("MERN Stack Development")}
          className={`btn fs-5 ${activeTab == 'MERN Stack Development' ? 'btn-primary' : ''}`}
        >
          MERN Stack Development
        </button>
        <button onClick={() => handleTab("Next js")} 
         className={`btn fs-5 ${activeTab == 'Next js' ? 'btn-primary' : ''}`} >
          Next js
        </button>
        <button onClick={() => handleTab("WordPress")} className={`btn fs-5 ${activeTab == 'WordPress' ? 'btn-primary' : ''}`}>
          WordPress
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
        {projects.map((project, index) => (
          <div key={project.id} className="col ">
            <div className="card h-100 shadow-lg">
              <div className="image-wrap w-100">
                <img src={project.image} className="img-fluid" alt="liveLink" />
              </div>

              <div className="card-body">
                <h5 className="card-title text-center">{project.name}</h5>

                <div className="text-center">
                  <Link
                    to={`project/${project.id}`}
                    className="btn btn-primary my-3"
                  >
                    View Details
                  </Link>

                  <Link to={project?.source?.live_link} className="btn btn-dark mx-2" target="_blank">Live Preview</Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* end */}
      </div>
    </>
  );
};

export default ProjectItem;
