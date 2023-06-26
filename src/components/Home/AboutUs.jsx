import React from "react";

const AboutUs = () => {
  return (
    <div style={{ backgroundColor: "#ddd" }}>
      <div className="container pt-5">
        <div className="row pt-5 ">
          <h1>ABOUT ME</h1>
          <hr
            className="ms-3 border-3 "
            style={{ width: "50px", backgroundColor: "red" }}
          />
          <p>I'm a MERN Stack developer</p>
          <div className="col-md-5 mt-5">
            <div>
              <img
                className="about-img img-fluid border border-5 border-white"
                src="./nieem.png"
                alt="nieem"
              />
            </div>
          </div>
          <div className="col-md-6 ms-5 mt-5 ">
            <h2>I'M NIEEM HOSSEN</h2>
            <h5>I'm a MERN Stack developer</h5>
            <p className="text-justify">I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
