import React, { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Skills = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh(); // Refresh AOS on component updates
      }, []);
  return (
    <div id="skills" className="text-white bg-dark py-5">
      <div className="container">
        <h4 className="text-center text-danger">Why Choose Me</h4>
        <h2 className="text-center">My Experience Area</h2>
        <div className="row mt-5  ">
          <div className="col-md-6">
            <div data-aos="fade-right" className="mt-4">
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

            <div data-aos="fade-right" className="mt-4">
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
            <div data-aos="fade-right" className="mt-4">
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
            <div data-aos="fade-right" className="mt-4">
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
            <div data-aos="fade-left" className="mt-4 ms-5 mobile-skills">
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

            <div data-aos="fade-left" className="mt-4 ms-5 mobile-skills">
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
            <div data-aos="fade-left" className="mt-4 ms-5 mobile-skills">
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
            <div data-aos="fade-left" className="mt-4 ms-5 mobile-skills">
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
        </div>
      </div>
    </div>
  );
};

export default Skills;
