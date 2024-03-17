import "./TeamComponent.css";

const TeamComponent: React.FC = () => {
  return (
    <section className="team-section bg-dark d-flex align-items-center px-3">
      <div className="container text-center">
        <div>
          <h1 className="display-3">Our Creative Team</h1>
          <p>
            Discover the masterminds behind XBirds, crafting innovation through
            creativity and imagination.
          </p>
        </div>
        <div className="row py-5">
          <div className="col-6 col-md-3 mb-3">
            <div className="profile">
              <img
                src="assets/team/matt-small.png"
                className="img-fluid"
                alt=""
              />
              <div className="profile-detail">
                <div>
                  <p className="my-0">Mattgene Y</p>
                </div>
                <div className="profile">
                  <p className="d-none d-sm-block my-0">Design Lead</p>
                  <p className="d-block d-sm-none my-0 smallest-text">
                    Design Lead
                  </p>
                </div>
                <div>
                  <a
                    className="mx-1 text-white"
                    href="https://twitter.com/duke_mattgene"
                    target="_blank"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="profile">
              <img
                src="assets/team/david-small.png"
                className="img-fluid"
                alt=""
              />
              <div className="profile-detail">
                <div>
                  <p className="my-0">David T</p>
                </div>
                <div>
                  <p className="d-none d-sm-block my-0">Content Lead</p>
                  <p className="d-block d-sm-none my-0 smallest-text">
                    Content Lead
                  </p>
                </div>
                <div>
                  <a
                    className="mx-1 text-white"
                    href="https://twitter.com/sfh40542"
                    target="_blank"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="profile">
              <img
                src="assets/team/nigel-small.png"
                className="img-fluid"
                alt=""
              />
              <div className="profile-detail">
                <div>
                  <p className="my-0">Nigel C</p>
                </div>
                <div>
                  <p className="d-none d-sm-block my-0">Tech Lead</p>
                  <p className="d-block d-sm-none my-0 smallest-text">
                    Tech Lead
                  </p>
                </div>
                <div>
                  <a
                    className="mx-1 text-white"
                    href="https://twitter.com/nigelchangmo"
                    target="_blank"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-md-3">
            <div className="profile">
              <img
                src="assets/team/rnv-small.png"
                className="img-fluid"
                alt=""
              />
              <div className="profile-detail">
                <div>
                  <p className="my-0">RNV</p>
                </div>
                <div>
                  <p className="d-none d-sm-block my-0">Community Lead</p>
                  <p className="d-block d-sm-none my-0 smallest-text">
                    Community Lead
                  </p>
                </div>
                <div>
                  <a
                    className="mx-1 text-white"
                    href="https://twitter.com/RinovMRN"
                    target="_blank"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamComponent;
