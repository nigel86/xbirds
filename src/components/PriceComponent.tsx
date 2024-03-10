import "./PriceComponent.css";

const PriceComponent: React.FC = () => {
  return (
    <div className="price-section bg-dark">
      <div className="container">
        <div className="row mt-10 justify-content-center">
          <div className="col-12 col-sm-4 text-center my-4">
            <h5>Whitelist Price</h5>
            <p className="h1 fw-bold text-primary">0.01 ETH</p>
            <p className="h6 mt-1 text-white-50">Check eligiblity</p>
          </div>
          <div className="col-12 col-sm-4 text-center  my-4">
            <h5>Earlybird Price</h5>
            <p className="h1 fw-bold text-primary">0.015 ETH</p>
            <p className="h6 mt-1 text-white-50">
              First 48 hours of public mint
            </p>
          </div>
          <div className="col-12 col-sm-4 text-center  my-4">
            <h5>Public Price</h5>
            <p className="h1 fw-bold text-primary">0.02 ETH</p>
            <p className="h6 mt-1 text-white-50">Only 5000 XBirds in total</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceComponent;
