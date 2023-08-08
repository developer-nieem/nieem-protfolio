import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaFacebookSquare, FaGitSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_wh2jyps",
        "template_psl4t8b",
        form.current,
        "Jqa85v9ax69DaUpp2"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Successfully send message!',
            showConfirmButton: false,
            timer: 1500
          })
          if (form.current) {
            form.current.reset();
          }
          
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="bg-dark">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-6 text-white">
            <h3>Let's Connect</h3>
            <p>
              Please fill out the form on this section to contact with me. Or
              call between 9:00 a.m. and 8:00 p.m. , Available All Days{" "}
            </p>
            <a className="fs-2 text-white text-decoration-none" href="https://www.linkedin.com/in/nieemhossen/"> <FaLinkedin></FaLinkedin> </a>
            <a className="fs-2 text-white text-decoration-none" href="https://github.com/developer-nieem"> <FaGithubSquare></FaGithubSquare> </a>
            <Link className="fs-2 text-white text-decoration-none" to="https://web.facebook.com/developernieem"> <FaFacebookSquare></FaFacebookSquare> </Link>
            <a className="fs-2 text-white text-decoration-none" href="https://twitter.com/nieemhossen"> <FaTwitterSquare></FaTwitterSquare> </a>
          
            
          </div>
          <div className="col-md-6 ">
            <form ref={form} onSubmit={sendEmail}>
            <div className="my-3">
            <label className="text-white ">Name</label>
              <input className="form-control " type="text" name="user_name" />
            </div>
             <div className="my-3">
             <label className="text-white ">Email</label>
              <input className="form-control " type="email" name="user_email" />
             </div>
             <div className="my-3">
             <label className="text-white ">Message</label>
              <textarea className="form-control " name="message" />
             </div>
             
              <input className="btn btn-primary  fs-5 py-2 px-4 rounded-5" type="submit" value="Send Message" />
            </form>
          </div>

            <hr className="text-white mt-5" />

        </div>

  
      </div>
     
    </div>
  );
};

export default ContactUs;
