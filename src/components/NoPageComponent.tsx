import "./NoPageComponent.css";

const NoPageComponent: React.FC = () => {
  return (
    <section className="nopage-section vh-100" id="nopage-section">
      <div className="container text-center">
        <h2 className="text-white">Page Not Found</h2>
        <img
          src="assets/img/nopage.svg"
          className="img-fluid"
          alt=""
          style={{ width: "500px", height: "500px" }}
        />
      </div>
    </section>
  );
};

export default NoPageComponent;
