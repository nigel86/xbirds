import "./IntroComponent.css";

const IntroComponent: React.FC = () => {
  return (
    <section className="intro-section bg-dark d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-7 px-4">
            <div className="badge rounded-pill text-dark mb-4 custom-badge">
              <div className="text-uppercase">Live on OP Mainnet</div>
            </div>

            <h1 className="display-3 fw-bolder mb-3 mb-sm-5 ">
              <span>What is XBirds?</span>
            </h1>
            <div className="h5 fw-light mb-4 mb-sm-5">
              XBirds is a collection of 5,000 meticulously hand-drawn and
              distinctive NFT birds residing on the Optimism blockchain. Beyond
              the mesmerizing art, each XBird offers exclusive access to a realm
              of abundance and rewards. Join us on this remarkable journey and
              become part of the XBirds saga!
            </div>
            <div className="d-grid gap-3 d-flex justify-content-sm-start">
              <button
                type="button"
                className="btn btn-lg px-5 py-sm-3 me-sm-3 fs-6 fw-bolder custom-outline"
              >
                XBirds Quest
              </button>
              <button
                type="button"
                className="btn btn-lg px-5 py-3 fs-6 fw-bolder btn-outline-secondary"
              >
                Details
              </button>
            </div>
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
    </section>
  );
};

export default IntroComponent;
