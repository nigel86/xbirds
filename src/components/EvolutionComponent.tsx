import "./EvolutionComponent.css";

const EvolutionComponent = () => {
  return (
    <section className="evolution-section d-flex align-items-center px-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-4 mb-5 text-center text-xl-start">
            <div className="mb-3">
              <div>
                <h1 className="display-3">Evolution of Xbirds</h1>
              </div>
            </div>
            <div className="mb-4">
              <div>
                <p>
                  Embark on a captivating XBirds journey and join the collectors
                  in an extraordinary world of wonder.
                </p>
              </div>
            </div>
          </div>

          <div className="col-xl-8">
            <div className="row">
              <div className="col-6 col-md-3 mb-4">
                <div
                  id="alpha"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/alpha1.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">ALPHA</h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/alpha2etherion.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">ETHERION</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#alpha"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#alpha"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className="col-6 col-md-3 mb-4">
                <div
                  id="nebulon"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/nebulon1.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">NEBULON</h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/nebulon2stargaze.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">STARGAZE</h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/nebulon3zenithar.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">ZENITHAR</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#nebulon"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#nebulon"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className="col-6 col-md-3 mb-4">
                <div
                  id="omega"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/omega1.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">OMEGA</h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/omega2celestrix.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">CELESTRIX</h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/omega3omega-techno.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            OMEGA-TECHNO
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#omega"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#omega"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>

              <div className="col-6 col-md-3 mb-4">
                <div
                  id="gothic"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/gothic1.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">GOTHIC</h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/gothic2.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">GOTHIC 2</h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#gothic"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#gothic"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="row justify-content-center">
              <div className="col-6 col-md-3 mb-4">
                <div
                  id="legendary"
                  className="carousel slide"
                  data-bs-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/legend1.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            LEGENDARY ???
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/legend2.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            LEGENDARY ???
                          </h5>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="d-block w-100 card bg-primary">
                        <img
                          src="assets/evolution/legend3.png"
                          className="card-img-top"
                          alt="..."
                        />
                        <div className="card-body">
                          <h5 className="card-title text-center">
                            LEGENDARY ???
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#legendary"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#legendary"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EvolutionComponent;
