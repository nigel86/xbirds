import "./IntroComponent.css";

const IntroComponent: React.FC = () => {
  return (
    <section className="intro-section" id="intro-section">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-8">
            <h2 className="text-white text-center my-5">
              Discover the XBirds World
            </h2>
            <p className="text-white-50">
              XBirds is a collection of 1,000 hand-drawn unique NFT birds living
              on the Optimism blockchain. Your xBird grants access to
              members-only experience and rewards. Future areas and perks can be
              unlocked by the community through roadmap activation.
            </p>
          </div>

          <div className="col-md-4">
            <div className="row g-4">
              <div className="col-6">
                <img
                  src="assets/nft/1.jpg"
                  className="img-fluid rounded d-block mx-auto"
                  alt="Grid 1"
                />
              </div>
              <div className="col-6">
                <img
                  src="assets/nft/2.jpg"
                  className="img-fluid rounded d-block mx-auto"
                  alt="Grid 2"
                />
              </div>
              <div className="col-6">
                <img
                  src="assets/nft/3.jpg"
                  className="img-fluid rounded d-block mx-auto"
                  alt="Grid 3"
                />
              </div>
              <div className="col-6">
                <img
                  src="assets/nft/4.jpg"
                  className="img-fluid rounded d-block mx-auto"
                  alt="Grid 4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroComponent;
