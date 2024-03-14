import "./BasicFormsOfBirdsComponent.css";

const BasicFormsOfBirdsComponent: React.FC = () => {
  return (
    <section className="weapon-section bg-dark" id="weapon-section">
      <div className="container p-4 text-center">
        <div className="row">
          <div className="col-12">
            <h3 className="my-5">The Powers Of X</h3>
            <p className="text-white-50 custom-title-style">
              Discover the formidable power and unrivaled capabilities of our
              weaponry.
            </p>
          </div>
        </div>
        <div className="row my-5 justify-content-center  px-5 px-sm-0 ">
          <div className="col-md-2 col-sm-4 mb-4">
            <img
              src="assets/img/weapon1.jpg"
              alt="X-Bird Power 1"
              className="img-fluid"
            />
            <div className="mt-2">
              <p className="mb-0">Celestial Wing Blades</p>
              <p className="mb-0 text-white-50 fw-light">Secret Rare</p>
            </div>
          </div>

          <div className="col-md-2 col-sm-4 mb-4">
            <img
              src="assets/img/weapon2.jpg"
              alt="X-Bird Power 2"
              className="img-fluid"
            />
            <div className="mt-2">
              <p className="mb-0">Resonant Energy Shield</p>
              <p className="mb-0 text-white-50 fw-light">Ultra Rare</p>
            </div>
          </div>

          <div className="col-md-2 col-sm-4 mb-4">
            <img
              src="assets/img/weapon3.jpg"
              alt="X-Bird Power 3"
              className="img-fluid"
            />
            <div className="mt-2">
              <p className="mb-0">Stellar Cannon Blaster</p>
              <p className="mb-0 text-white-50 fw-light">Rare</p>
            </div>
          </div>

          <div className="col-md-2 col-sm-4 mb-4">
            <img
              src="assets/img/weapon4.jpg"
              alt="X-Bird Power 4"
              className="img-fluid"
            />
            <div className="mt-2">
              <p className="mb-0">Mind's Eye Gauntlet</p>
              <p className="mb-0 text-white-50 fw-light">Uncommon</p>
            </div>
          </div>

          <div className="col-md-2 col-sm-4 mb-4">
            <img
              src="assets/img/weapon5.jpg"
              alt="X-Bird Power 5"
              className="img-fluid"
            />
            <div className="mt-2">
              <p className="mb-0">Harmonic Prism</p>
              <p className="mb-0 text-white-50 fw-light">Common</p>
            </div>
            <div className="col-12 col-lg-4 mx-auto">
              <div
                id="carouselExample"
                className="carousel slide p-5"
                data-bs-interval="2000"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="assets/nft/002.png"
                      className="d-block w-100"
                      alt="item"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/nft/003.png"
                      className="d-block w-100"
                      alt="item"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/nft/005.png"
                      className="d-block w-100"
                      alt="item"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="assets/nft/006.png"
                      className="d-block w-100"
                      alt="item"
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExample"
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
                  data-bs-target="#carouselExample"
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
    </section>
  );
};

export default BasicFormsOfBirdsComponent;
