import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

const Skills = () => {
    
  return (
    <div id="skills" className="text-white bg-dark py-5">
      <div className="container">
        <h4 className="text-center text-danger">Why Choose Me</h4>
        <h2 className="text-center">My Skills Area</h2>
       
       <div className="row mt-5">
     
        <div className="col-sm-6 col-md-2 col-lg-2 my-2 ">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img" src="/html.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">HTML</h3>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 my-2">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img" src="/css.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">CSS</h3>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 my-2">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img-bootstrap" src="/bootstrap.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">Bootstrap</h3>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 my-2 div-animation">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img" src="/tailwind.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">Tailwind CSS</h3>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 my-2">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img-js" src="/js.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">JavaScript</h3>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 my-2 div-animation">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img" src="/react.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">React JS</h3>
            </div>
          </div>
        
        
       </div>
       <div className="row mt-2">
          <div className="col-sm-6 col-md-2 col-lg-2 my-2 div-animation">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img" src="/next.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">Next JS</h3>
            </div>
          </div>
          <div className="col-sm-6 col-md-2 col-lg-2 my-2 div-animation">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img" src="/ExpressJS.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">Express JS</h3>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 my-2">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img" src="/mongodb.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">MongoDB</h3>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 my-2">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img-firebase" src="/firebase.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">Firebase</h3>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 my-2 div-animation">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img" src="/wp.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">WordPress</h3>
            </div>
          </div>
          <div className="col-md-2 col-lg-2 col-sm-6 my-2">
            <div className="p-3 bg-black text-center rounded-3 shadow-lg">
              <img className="skills-img-shopify" src="/Shopify.png" alt="skills_nieem" />
              <h3 className="fs-5 mt-2">Shopify</h3>
            </div>
          </div>
         
       </div>
       
       {/*  <div className="row mt-5  ">
          <div className="col-md-6">
            <div  className="mt-4">
            <h4>HTML</h4>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="99"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar progress-bar-striped  progress-bar-animated " style={{width:'99%'}}>99%</div>
            </div>
            </div>

            <div  className="mt-4">
            <h4>CSS</h4>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="90"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar progress-bar-striped  progress-bar-animated " style={{width:'90%'}}>90%</div>
            </div>
            </div>
            <div  className="mt-4">
            <h4>BootStrap</h4>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="95"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar progress-bar-striped  progress-bar-animated " style={{width:'95%'}}>95%</div>
            </div>
            </div>
            <div  className="mt-4">
            <h4>Tailwind CSS</h4>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar progress-bar-striped  progress-bar-animated " style={{width:'85%'}}>85%</div>
            </div>
            </div>
          </div>
          <div className="col-md-6 ">
            <div  className="mt-4 ms-5 mobile-skills">
            <h4>JavaScript</h4>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="75"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar progress-bar-striped  progress-bar-animated " style={{width:'75%'}}>75%</div>
            </div>
            </div>

            <div  className="mt-4 ms-5 mobile-skills">
            <h4>React JS</h4>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="85"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar progress-bar-striped  progress-bar-animated " style={{width:'85%'}}>85%</div>
            </div>
            </div>
            <div  className="mt-4 ms-5 mobile-skills">
            <h4>Express JS & MongoDB</h4>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="60"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar progress-bar-striped  progress-bar-animated " style={{width:'60%'}}>60%</div>
            </div>
            </div>
            <div  className="mt-4 ms-5 mobile-skills">
            <h4>WordPress</h4>
            <div
              className="progress my-2"
              role="progressbar"
              aria-label="Animated striped example"
              aria-valuenow="88"
              aria-valuemin="0"
              aria-valuemax="100"
            >
              <div className="progress-bar progress-bar-striped  progress-bar-animated " style={{width:'88%'}}>88%</div>
            </div>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Skills;
