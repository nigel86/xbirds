import "./IntroComponent.css";

const IntroComponent = () => {
  return (
    <section className="intro-section bg-dark d-flex align-items-center">
      <div className="container px-4">
        <div className="row justify-content-center pb-4">
          <div className="col-12 col-lg-8">
            <div className="badge rounded-pill text-dark mt-4 mb-2 custom-badge">
              <div className="text-uppercase">Live on BASE</div>
            </div>
            <h1 className="display-3 mb-4">What is XBirds?</h1>
            <p className="mb-4">
              XBirds is a collection of 5,000 meticulously hand-drawn and
              distinctive NFT birds residing on the BASE blockchain. Beyond the
              mesmerizing art, each XBird offers exclusive access to a realm of
              abundance and rewards. Join us on this remarkable journey and
              become part of the XBirds saga!
            </p>

            <div className="d-flex justify-content-center justify-content-md-start mb-3 pb-4">
              <a
                href="https://galxe.com/XBirds"
                className="btn d-flex align-items-center justify-content-center px-3 py-2 me-3 custom-outline mb-1 mb-md-0 btn-fixed-size"
                target="_blank"
              >
                XBirds Quest
              </a>

              <a
                href="https://xbirds.gitbook.io/xbirds-docs"
                className="btn d-flex align-items-center justify-content-center px-3 py-2 btn-outline-secondary btn-fixed-size"
                target="_blank"
              >
                Details
              </a>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className="row gx-3 gy-3">
              <div className="col-6 col-md-3 col-lg-6">
                <img
                  src="assets/intro/1.png"
                  className="img-thumbnail"
                  alt="..."
                />
              </div>
              <div className="col-6 col-md-3 col-lg-6">
                <img
                  src="assets/intro/2.png"
                  className="img-thumbnail"
                  alt="..."
                />
              </div>
              <div className="col-6 col-md-3 col-lg-6">
                <img
                  src="assets/intro/3.png"
                  className="img-thumbnail"
                  alt="..."
                />
              </div>
              <div className="col-6 col-md-3 col-lg-6">
                <img
                  src="assets/intro/4.png"
                  className="img-thumbnail"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row pt-4 my-4 justify-content-center">
          <div className="col-12 col-md-4 text-center mb-4">
            <h6 className="mb-0">Whitelist Price</h6>
            <h1 className="display-3 fw-bold text-primary mb-0">0.005 ETH</h1>
            <h6 className="text-white-50">3 hours</h6>
          </div>
          <div className="col-12 col-md-4 text-center mb-4">
            <h6 className="mb-0">Public Price</h6>
            <h1 className="display-3 fw-bold text-primary mb-0">0.008 ETH</h1>
            <h6 className="text-white-50">12 hours</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroComponent;
