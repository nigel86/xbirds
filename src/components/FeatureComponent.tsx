import "./FeatureComponent.css";

const FeatureComponent = () => {
  return (
    <section className="feature-section">
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <img
              src="assets/logo/xbirds.png"
              alt="Feature Image"
              className="img-fluid mb-4"
            />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6 col-md-3 text-center">
            <img
              src="assets/info/ethereum.png"
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
              src="assets/info/multiple-users-silhouette.png"
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
              src="assets/info/paint-board-and-brush.png"
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
              src="assets/info/letter-o.png"
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
      </div>
    </section>
  );
};

export default FeatureComponent;
