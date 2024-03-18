//import CountdownComponent from "./CountdownComponent";
import MintComponent from "./MintComponent";
import "./MainComponent.css";

const MainComponent: React.FC = () => {
  // const beforeMintPeriod = false;

  return (
    <div className="masthead-section" id="masthead-section">
      <div className="container d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="text-uppercase my-5">The XBirds</h1>

            {/* <div id="test" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <CountdownComponent />
                </div>
                <div className="carousel-item">
                  <MintComponent />
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#test"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#test"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div> */}
            <MintComponent />
            {/* {beforeMintPeriod ? <CountdownComponent /> : <MintComponent />} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
