import CountdownComponent from "./CountdownComponent";
import MintComponent from "./MintComponent";
import "./MainComponent.css";

const MainComponent: React.FC = () => {
  const beforeMintPeriod = false;

  return (
    <div className="masthead-section" id="masthead-section">
      <div className="container d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="text-uppercase my-5">The XBirds</h1>

            {beforeMintPeriod ? <CountdownComponent /> : <MintComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
