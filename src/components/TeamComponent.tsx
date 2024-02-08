import "./TeamComponent.css";

const TeamComponent: React.FC = () => {
  return (
    <section className="team-section" id="team-section">
      <div className="container text-center">
        <div className="row">
          <div className="col-12">
            <h3 className="my-5">Our Creative Team</h3>
            <p className="text-white-50">
              Discover the masterminds behind XBirds, crafting innovation
              through creativity and imagination.
            </p>
          </div>
          <div className="col-sm-4 px-5 px-sm-3 py-5">
            <div className="profile">
              <img src="assets/nft/1.jpg" className="img-fluid" alt="" />
              <div className="profile-detail">
                <div className="row">
                  <div className="col-12">
                    <p className="my-0">Mattgene</p>
                  </div>
                  <div className="col-12">
                    <p className="my-0 fw-light">Lead Designer</p>
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
          <div className="col-sm-4 px-5 px-sm-3 py-5">
            <div className="profile">
              <img src="assets/nft/2.jpg" className="img-fluid" alt="" />
              <div className="profile-detail">
                <div className="row">
                  <div className="col-12">
                    <p className="my-0">David</p>
                  </div>
                  <div className="col-12">
                    <p className="my-0 fw-light">Commun. Director</p>
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
          <div className="col-sm-4 px-5 px-sm-3 py-5">
            <div className="profile">
              <img src="assets/nft/3.jpg" className="img-fluid" alt="" />
              <div className="profile-detail">
                <div className="row">
                  <div className="col-12">
                    <p className="my-0">Nigel</p>
                  </div>
                  <div className="col-12">
                    <p className="my-0 fw-light">Tech. Developer</p>
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
