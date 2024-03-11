import "./TeamComponent.css";

const TeamComponent: React.FC = () => {
  return (
    <section
      className="team-section bg-dark d-flex align-items-center"
      id="team-section"
    >
      <div className="container p-4 text-center">
        <div>
          <h3 className="my-5">Our Creative Team</h3>
          <p className="text-white-50 custom-title-style">
            Discover the masterminds behind XBirds, crafting innovation through
            creativity and imagination.
          </p>
        </div>
        <div className="row py-5">
          <div className="col-6 col-sm-3 mb-3">
            <div className="profile">
              <img
                src="assets/team/matt-small.png"
                className="img-fluid"
                alt=""
              />
              <div className="profile-detail">
                <div>
                  <p className="d-none d-sm-block my-0">Mattgene Y</p>
                  <p className="smallest-text d-block d-sm-none my-0">
                    Mattgene Y
                  </p>
                </div>
                <div>
                  <p className="d-none d-sm-block my-0">Design Lead</p>
                  <p className="smallest-text d-block d-sm-none my-0">
                    Design Lead
                  </p>
                </div>
                <div>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-medium"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="profile">
              <img
                src="assets/team/david-small.png"
                className="img-fluid"
                alt=""
              />
              <div className="profile-detail">
                <div>
                  <p className="d-none d-sm-block my-0">David T</p>
                  <p className="smallest-text d-block d-sm-none my-0">
                    David T
                  </p>
                </div>
                <div>
                  <p className="d-none d-sm-block my-0">Content Lead</p>
                  <p className="smallest-text d-block d-sm-none my-0">
                    Content Lead
                  </p>
                </div>
                <div>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="profile">
              <img
                src="assets/team/nigel-small.png"
                className="img-fluid"
                alt=""
              />
              <div className="profile-detail">
                <div>
                  <p className="d-none d-sm-block my-0">Nigel C</p>
                  <p className="smallest-text d-block d-sm-none my-0">
                    Nigel C
                  </p>
                </div>
                <div>
                  <p className="d-none d-sm-block my-0">Tech Lead</p>
                  <p className="smallest-text d-block d-sm-none my-0">
                    Tech Lead
                  </p>
                </div>
                <div>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-6 col-sm-3">
            <div className="profile">
              <img
                src="assets/team/rnv-small.png"
                className="img-fluid"
                alt=""
              />
              <div className="profile-detail">
                <div>
                  <p className="d-none d-sm-block my-0">RNV</p>
                  <p className="smallest-text d-block d-sm-none my-0">RNV</p>
                </div>
                <div>
                  <p className="d-none d-sm-block my-0">Community Lead</p>
                  <p className="smallest-text d-block d-sm-none my-0">
                    Community Lead
                  </p>
                </div>
                <div>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-discord"></i>
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
