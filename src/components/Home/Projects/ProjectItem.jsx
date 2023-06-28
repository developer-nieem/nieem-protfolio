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
                      <div className="col-md-6">
                        
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

      <div className="col">
        <div className="card h-100">
          <img src="" className="" alt="liveLink" />
          <div className="card-body">
            <h5 className="card-title"></h5>

            <div className="text-center">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#projectsOne"
              >
                View Details
              </button>
            </div>

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
                  <div class="modal-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Third projects */}

      <div className="col">
        <div className="card h-100">
          <img src="" className="" alt="liveLink" />
          <div className="card-body">
            <h5 className="card-title"></h5>

            <div className="text-center">
              <button
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#projectsOne"
              >
                View Details
              </button>
            </div>

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
                  <div class="modal-body"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
