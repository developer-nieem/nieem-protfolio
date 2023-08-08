import React, { useEffect } from "react";
import { FaEnvelope, FaGithubSquare, FaLinkedin, FaSkype, FaWhatsapp, FaWhatsappSquare } from "react-icons/fa";
import Fade from 'react-reveal/Fade';
import Swal from 'sweetalert2'

const AboutUs = () => {

    const downloadPdf = () => {
        window.open('https://drive.google.com/u/1/uc?id=1kPrl4LeGseBSIfVlBGOxaoJ3fkGVp69B&export=download', '_parent');

        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thanks for Download! ',
            showConfirmButton: false,
            timer: 1500
          })

      };

      useEffect(() => {
       
        
      }, []);
      
  return (
    <div id="about" style={{ backgroundColor: "#ddd" }}>
      <div className="container py-5">
        <div className="row pt-5 align-items-center">
         <div>
         <h1>ABOUT ME</h1>
          <hr
            className="ms-3 border-3 "
            style={{ width: "50px", backgroundColor: "red" }}
          />
          <p>I'm a MERN Stack developer</p>
         </div>
          <div className="col-md-5 mt-5">
            <div>
            <Fade left>
            <img 
                className="about-img img-fluid border border-5 border-white"
                src="./nieem.png"
                alt="nieem"
              />
            </Fade>
            </div>
          </div>

         <Fade right>
         <div  className="col-md-6 ms-5 mt-5 text-black about-mobile">
            <h2 >I'M NIEEM HOSSEN</h2>
            <h5>I'm a MERN Stack developer</h5>
            <p >I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions. Check out my Portfolio</p>
            
          <p> <FaEnvelope></FaEnvelope> nieemhossen@gmail.com</p>
          <p> <FaWhatsapp></FaWhatsapp> +880 17441 12183</p>
          <p> <FaSkype></FaSkype> live:nieemhossen </p>
            <a onClick={downloadPdf} className="btn btn-success text-uppercase m-1" download>Download Resum</a>
            <a href="#contact" className="btn btn-info text-uppercase m-1">Hire Me </a>
          </div>
         </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
