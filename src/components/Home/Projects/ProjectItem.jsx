const ProjectItem = () => {
  var imgBox = document.querySelectorAll(".website-img img");
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

  return (
    <div className="row row-cols-1 row-cols-md-2 g-4 py-5">
      <div className="col ">
        <div className="card h-100 shadow-lg">
          <div className="image-wrap w-100">
            <img
              src="https://i.ibb.co/R0m28y4/33a0db82-c50f-4ad9-842f-553b377072ac.png"
              className="img-fluid"
              alt="liveLink"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title text-center">BD NM FOODVALLEY</h5>

            <div className="text-center">
              <button
                className="btn btn-primary my-3"
                data-bs-toggle="modal"
                data-bs-target="#projectsOne"
              >
                View Details
              </button>
            </div>

            {/* modal  */}
            <div
              class="modal fade"
              id="projectsOne"
              tabindex="-1"
              aria-labelledby="projectsOneLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="modal-images w-100">
                          <img
                            src="https://i.ibb.co/R0m28y4/33a0db82-c50f-4ad9-842f-553b377072ac.png"
                            className="img-fluid"
                            alt="liveLink"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div>
                          <a href="https://bd-nm-foodvalley.web.app/" className="btn btn-outline-primary m-1">
                            Live Link
                          </a>
                          <a href="https://github.com/developer-nieem/BD-NM-FoodValley-client" className="btn btn-outline-primary m-1">
                            Client Repo
                          </a>
                          <a href="https://github.com/developer-nieem/BD-NM-FoodValley-Server" className="btn btn-outline-primary m-1">
                            Server Repo
                          </a>
                        </div>

                        <div className="my-2">
                          <h3>Technologies:</h3>
                          <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">Bootstrap</li>
                            <li class="list-group-item">React JS</li>
                            <li class="list-group-item">Express Js</li>
                            <li class="list-group-item">MongoDB</li>
                            <li class="list-group-item">FireBase</li> 
                          </ul>
                        </div>

                        <div className="modal-content-custom">
                            <h3>
                                Projects Features:
                            </h3>
                            <ul>
                                <li>
                                We have a header section with brand name , navbar, and profile option profile option is conditional. if user logged in its show and if you hover the photo will be show the user name
                                </li>
                                <li>
                                And second section is banner section just static design
                                </li>
                                <li>
                                Third Section also same , its also static design
                                </li>

                            </ul>
                            <h5>
                                Most Important Features:
                                
                            </h5>
                            <ul>
                                <li>
                                Chef information section we load data using fetch with API and load data. and we have a view recipes button that generate dynamic path and show the chef details with recipes features * spacial things is when click view recipes is goest to login page if you login successfully you see the page
                                </li>
                                <li>
                                We have login and register features that make FireBase
                                </li>
                                <li>
                                we have many other thing like app download section, footer section , error page , lazy load image etc.
                                </li>

                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second project */}

      <div className="col ">
        <div className="card h-100 shadow-lg">
          <div className="image-wrap w-100">
            <img
              src="https://i.ibb.co/GCpzm6F/screencapture-toys-car-42e62-web-app-2023-06-28-16-21-41.png"
              className="img-fluid"
              alt="liveLink"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title text-center">NM CARS TOYS STORE</h5>

            <div className="text-center">
              <button
                className="btn btn-primary my-3"
                data-bs-toggle="modal"
                data-bs-target="#projectsTwo"
              >
                View Details
              </button>
            </div>

            {/* modal  */}
            <div
              class="modal fade"
              id="projectsTwo"
              tabindex="-1"
              aria-labelledby="projectsTwoLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="modal-images w-100">
                          <img
                            src="https://i.ibb.co/GCpzm6F/screencapture-toys-car-42e62-web-app-2023-06-28-16-21-41.png"
                            className="img-fluid"
                            alt="liveLink"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div>
                          <a href="https://toys-car-42e62.web.app/" className="btn btn-outline-primary m-1">
                            Live Link
                          </a>
                          <a href="https://github.com/developer-nieem/nm-cars-toys-store-client" className="btn btn-outline-primary m-1">
                            Client Repo
                          </a>
                          <a href="https://github.com/developer-nieem/nm-cars-toys-store-server" className="btn btn-outline-primary m-1">
                            Server Repo
                          </a>
                        </div>

                        <div className="my-2">
                          <h3>Technologies:</h3>
                          <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">Bootstrap</li>
                            <li class="list-group-item">React JS</li>
                            <li class="list-group-item">Express Js</li>
                            <li class="list-group-item">MongoDB</li>
                            <li class="list-group-item">FireBase</li> 
                          </ul>
                        </div>

                        <div className="modal-content-custom">
                            <h3>
                                Projects Features:
                            </h3>
                            <ul>
                                <li>
                                we have a navbar with 5 item 2 items is private when user login see the item , with see the profile pictur
                                </li>
                                <li>
                                Home page have five section like , Banner , Gallery , Category with sub category , choose us , about me(mission and faq)  </li>
                                <li>
                                Category section with have a Tab load dynamic car toys data and showing per tab at least 2 data

                                </li>
                                <li>
                                Also we have login and register system
                                </li>

                            </ul>
                            <h5>
                                Most Important Features:
                                
                            </h5>
                            <ul>
                                <li>
                                add a toy : we can add toys your profile
                                </li>
                                <li>
                                my toy : You can see your all added toys and you can do update or edit and delete your posted data
                                </li>
                                <li>
                                all toy : you can see all user toys and also can see details
                                </li>

                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third projects */}
      <div className="col ">
        <div className="card h-100 shadow-lg">
          <div className="image-wrap w-100">
            <img
              src="https://i.ibb.co/N7mJhSB/screencapture-nm-sports-academy-web-app-2023-06-28-16-28-25.png"
              className="img-fluid"
              alt="liveLink"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title text-center">BD NM FOODVALLEY</h5>

            <div className="text-center">
              <button
                className="btn btn-primary my-3"
                data-bs-toggle="modal"
                data-bs-target="#projectsThird"
              >
                View Details
              </button>
            </div>

            {/* modal  */}
            <div
              class="modal fade"
              id="projectsThird"
              tabindex="-1"
              aria-labelledby="projectsThirdLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="modal-images w-100">
                          <img
                            src="https://i.ibb.co/N7mJhSB/screencapture-nm-sports-academy-web-app-2023-06-28-16-28-25.png"
                            className="img-fluid"
                            alt="liveLink"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div>
                          <a href="https://nm-sports-academy.web.app/" className="btn btn-outline-primary m-1">
                            Live Link
                          </a>
                          <a href="https://github.com/developer-nieem/nm-sports-academy-client" className="btn btn-outline-primary m-1">
                            Client Repo
                          </a>
                          <a href="https://github.com/developer-nieem/nm-sports-academy-server" className="btn btn-outline-primary m-1">
                            Server Repo
                          </a>
                        </div>

                        <div className="my-2">
                          <h3>Technologies:</h3>
                          <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">Tailwind CSS</li>
                            <li class="list-group-item">React JS</li>
                            <li class="list-group-item">Express Js</li>
                            <li class="list-group-item">MongoDB</li>
                            <li class="list-group-item">FireBase</li> 
                          </ul>
                          <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">react-router</li>
                            <li class="list-group-item">hook-form</li>
                            <li class="list-group-item">Tanstack</li>
                            <li class="list-group-item">axios</li>
                            <li class="list-group-item">stripe</li> 
                          </ul>
                        </div>

                        <div className="modal-content-custom">
                            <h3>
                                Projects Features:
                            </h3>
                            <ul>
                                <li>
                                we have a navbar with 4 item 1 items is private. when user login see the Dashboard , with see the profile picture
                                </li>
                                <li>
                                Home page have 4 section like , Slider , Popular Classes , Popular Instructors , Feature
                                </li>
                                <li>
                                Have instructor and classes page , you can see all instructor and all approved classes by admin
                                </li>
                                <li>
                                Also we have login and register system by firebase and user store on ## mongoDB
                                </li>

                            </ul>
                            <h5>
                                Most Important Features:
                                
                            </h5>
                            <ul>
                                <li>
                                Students dashboard : Have 3 item on students dashboard.
                                    <ul>
                                        <li>my selected class : you can see all your selected class and you can pay with strip your selected classes</li>
                                        <li>my Enrolled class : you can see all your Enrolled class that you paid successfully</li>
                                        <li>Payment history : You can see your all payment history</li>
                                    </ul>
                                </li>
                                <li>
                                Instructor dashboard : Have 2 item on Instructor dashboard.
                                <ul>
                                        <li>Add a class : instructor can add classes</li>
                                        <li>my classes : instructor see all posted classes that have pending and approved</li>
                                        
                                    </ul>
                                </li>
                                <li>
                                Admin Dashboard : Have 2 item on Admin Dashboard.
                                <ul>
                                        <li>Manage classes : Admin can approve and deny classes that post from instructor . if admin deny class not showing on then classes page . also admin send feedback why approved or deny</li>
                                        <li>Manage Users : admin can make a user as instructor / admin</li>
                                        
                                    </ul>
                                </li>
                                

                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 start here  */}
      <div className="col ">
        <div className="card h-100 shadow-lg">
          <div className="image-wrap w-100">
            <img
              src="https://i.ibb.co/RPc143K/screencapture-ph-assignment-nine9-netlify-app-2023-06-28-16-42-49.png"
              className="img-fluid"
              alt="liveLink"
            />
          </div>

          <div className="card-body">
            <h5 className="card-title text-center">DevJOB Hub</h5>

            <div className="text-center">
              <button
                className="btn btn-primary my-3"
                data-bs-toggle="modal"
                data-bs-target="#projectsFour"
              >
                View Details
              </button>
            </div>

            {/* modal  */}
            <div
              class="modal fade"
              id="projectsFour"
              tabindex="-1"
              aria-labelledby="projectsFourLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog modal-dialog-centered modal-xl">
                <div class="modal-content">
                  <div class="modal-header">
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="modal-images w-100">
                          <img
                            src="https://i.ibb.co/RPc143K/screencapture-ph-assignment-nine9-netlify-app-2023-06-28-16-42-49.png"
                            className="img-fluid"
                            alt="liveLink"
                          />
                        </div>
                      </div>
                      <div className="col-md-6 ">
                        <div>
                          <a href="https://ph-assignment-nine9.netlify.app/" className="btn btn-outline-primary m-1">
                            Live Link
                          </a>
                          <a href="https://github.com/developer-nieem/DevJOB-Hub" className="btn btn-outline-primary m-1">
                            Client Repo
                          </a>
                          <a href="#" className="btn btn-outline-primary m-1">
                            Server Repo
                          </a>
                        </div>

                        <div className="my-2">
                          <h3>Technologies:</h3>
                          <ul class="list-group list-group-horizontal">
                            <li class="list-group-item">Bootstrap</li>
                            <li class="list-group-item">React JS</li>
                            <li class="list-group-item">Express Js</li>
                            <li class="list-group-item">MongoDB</li>
                            <li class="list-group-item">FireBase</li> 
                          </ul>
                        </div>

                        <div className="modal-content-custom">
                            <h3>
                                We have a good Header with responsive
                            </h3>
                            <ul>
                                <li>
                                We have a good Header with responsive
                                </li>
                                <li>
                                And also have a banner part </li>
                                <li>
                                third section we have dynamic jobs category

                                </li>
                               

                            </ul>
                            <h5>
                                Most Important Features:
                                
                            </h5>
                            <ul>
                                <li>
                                We have a jobs feature list you can see the job circular with some details and when you click the view Details you can see the open a new page for all details and you can get a option for apply the jobs
                                </li>
                                <li>
                                You have to show a chart with marks details
                                </li>
                               

                            </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



{/* end */}
    </div>
  );
};

export default ProjectItem;
