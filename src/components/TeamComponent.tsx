import "./TeamComponent.css";

const TeamComponent: React.FC = () => {
  return (
    <section className="team-section bg-dark" id="team-section">
      <div className="container p-4 text-center">
        <div>
          <h3 className="my-5">Our Creative Team</h3>
          <p className="text-white-50 custom-title-style">
            Discover the masterminds behind XBirds, crafting innovation through
            creativity and imagination.
          </p>
        </div>
        <div className="row py-5">
          <div className="col-6 col-sm-3 ">
            <div className="profile">
              <img src="assets/team/matt.jpg" className="img-fluid" alt="" />
              <div className="profile-detail">
                <div className="row">
                  <div className="col-12">
                    <p className="my-0">Mattgene Y</p>
                  </div>
                  <div className="col-12">
                    <p className="my-0 fw-light">Design Lead</p>
                  </div>
                  <div className="col-12">
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
          </div>
          <div className="col-6 col-sm-3 ">
            <div className="profile">
              <img src="assets/team/david.jpg" className="img-fluid" alt="" />
              <div className="profile-detail">
                <div className="row">
                  <div className="col-12">
                    <p className="my-0">David T</p>
                  </div>
                  <div className="col-12">
                    <p className="my-0 fw-light">Content Lead</p>
                  </div>
                  <div className="col-12">
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
          <div className="col-6 col-sm-3 ">
            <div className="profile">
              <img src="assets/team/nigel.jpg" className="img-fluid" alt="" />
              <div className="profile-detail">
                <div className="row">
                  <div className="col-12">
                    <p className="my-0">Nigel C</p>
                  </div>
                  <div className="col-12">
                    <p className="my-0 fw-light">Tech Lead</p>
                  </div>
                  <div className="col-12">
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
          <div className="col-6 col-sm-3 ">
            <div className="profile">
              <img src="assets/team/rnv.jpg" className="img-fluid" alt="" />
              <div className="profile-detail">
                <div className="row">
                  <div className="col-12">
                    <p className="my-0">RNV</p>
                  </div>
                  <div className="col-12">
                    <p className="my-0 fw-light">Community Lead</p>
                  </div>
                  <div className="col-12">
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
      </div>
    </section>
  );
};

export default TeamComponent;
