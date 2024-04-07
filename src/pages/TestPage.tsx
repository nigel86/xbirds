import MintComponent from "../components/MintComponent";
import "../components/MainComponent.css";

const TestPage: React.FC = () => {
  return (
    <>
      <div className="masthead-section" id="masthead-section">
        <div className="container d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="display-1 fw-bold text-uppercase my-5">
                The XBirds
              </h1>
              <MintComponent />
            </div>
          </div>
        </div>
      </div>
    </>
  );
  <MintComponent />;
};

export default TestPage;
