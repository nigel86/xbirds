import "./FooterComponent.css";

const FooterComponent: React.FC = () => {
  return (
    <footer className="small text-white-50 text-center bg-dark">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-md-start justify-content-center">
            <span>
              BUIDL with <i className="fa-solid fa-heart"></i> on
              <img
                className="mx-2"
                src="assets/logo/op.svg"
                alt="External Logo"
                width="90"
              />
            </span>
          </div>
          <div className="col-md-6 d-flex justify-content-md-end justify-content-center">
            <span>
              Find us on
              <a
                className="text-primary mx-2"
                href="https://twitter.com/XBirdsDAO"
                target="_blank"
              >
                <i className="fa-brands fa-x-twitter fa-lg"></i>
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <p className="fw-bold">XBirds</p> Copyright © 2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default FooterComponent;
