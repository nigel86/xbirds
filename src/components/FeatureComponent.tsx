import "./FeatureComponent.css";

const FeatureComponent = () => {
  return (
    <section className="feature-section px-3">
      <div className="container">
        <div className="row align-items-center text-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="d-flex justify-content-center">
              <div className="col text-center">
                <img
                  src="assets/feature/xbirds.png"
                  alt="Feature Image"
                  className="d-none d-lg-block img-fluid mb-4"
                />
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <h1 className="display-3">
              Everyone benefits from our <em className="text-primary">fair </em>
              model
            </h1>
            <div className="mt-4">
              <div className="row mb-3">
                <div className="col-3">
                  <img
                    src="assets/feature/profit-sharing.png"
                    alt="..."
                    className="img-fluid mb-4"
                    width="100"
                  />
                </div>
                <div className="col-9">
                  <h4>Profit Sharing</h4>
                  <p>
                    Everyone benefits from our fair profit-sharing model,
                    ensuring inclusive success for all participants.
                  </p>
                  <hr className="mb-1" />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-3">
                  <img
                    src="assets/feature/community.png"
                    alt="..."
                    className="img-fluid mb-4"
                    width="100"
                  />
                </div>
                <div className="col-9">
                  <h4>Community Involvement</h4>
                  <p>
                    Community-driven approach empowers members to shape our
                    project, fostering ownership and collaboration.
                  </p>
                  <hr className="mb-1" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-3">
                  <img
                    src="assets/feature/artwork.png"
                    alt="..."
                    className="img-fluid mb-4"
                    width="100"
                  />
                </div>
                <div className="col-9">
                  <h4>Original Artworks</h4>
                  <p>
                    Discover genuine creativity with our curated collection of
                    original artworks, offering collectors unique pieces.
                  </p>
                  <hr className="mb-1" />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col-3">
                  <img
                    src="assets/feature/thrive-with-op.png"
                    alt="..."
                    className="img-fluid mb-4"
                    width="100"
                  />
                </div>
                <div className="col-9">
                  <h4>Thrive with Optimism</h4>
                  <p>
                    Ride the wave of growth on the Optimism chain while
                    nurturing its NFT ecosystem.
                  </p>
                  <hr className="mb-1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container">
        <div className="row">
          <div className="col text-center">
            <img
              src="assets/feature/xbirds.png"
              alt="Feature Image"
              className="img-fluid mb-4"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-3 text-center">
            <img
              src="assets/feature/profit-sharing.png"
              alt="Thumbnail A"
              className="img-fluid mb-4"
              width="100"
            />
            <p className="fw-bold text-primary">Profit Sharing</p>
            <p>
              Everyone benefits from our fair profit-sharing model, ensuring
              inclusive success for all participants.
            </p>
          </div>
          <div className="col-6 col-md-3 text-center">
            <img
              src="assets/feature/community.png"
              alt="Thumbnail B"
              className="img-fluid mb-4"
              width="100"
            />
            <p className="fw-bold text-primary">Community Involvement</p>
            <p>
              Community-driven approach empowers members to shape our project,
              fostering ownership and collaboration.
            </p>
          </div>
          <div className="col-6 col-md-3 text-center">
            <img
              src="assets/feature/artwork.png"
              alt="Thumbnail C"
              className="img-fluid mb-4"
              width="100"
            />
            <p className="fw-bold text-primary">Original Artworks</p>
            <p>
              Discover genuine creativity with our curated collection of
              original artworks, offering collectors unique pieces.
            </p>
          </div>
          <div className="col-6 col-md-3 text-center">
            <img
              src="assets/feature/thrive-with-op.png"
              alt="Thumbnail D"
              className="img-fluid mb-4"
              width="100"
            />
            <p className="fw-bold text-primary">Thrive with Optimism</p>
            <p>
              Ride the wave of growth on the Optimism chain while nurturing its
              NFT ecosystem.
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default FeatureComponent;
