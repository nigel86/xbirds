import "./FooterComponent.css";

const FooterComponent: React.FC = () => {
  return (
    <footer className="small text-white-50 text-center bg-dark">
      <div className="container py-5">
        <p>
          <span>
            BUIDL with <i className="fa-solid fa-heart"></i> on
            <img
              className="mx-2"
              src="assets/logo/base.svg"
              alt="External Logo"
              width="60"
            />
          </span>
        </p>
        <b>XBirds</b> Copyright © 2024 All Rights Reserved
      </div>
    </footer>
  );
};

export default FooterComponent;
