import WhiteListComponent from "./WhiteListComponent";
import MintComponent from "./MintComponent";
import "./MainComponent.css";

const MainComponent: React.FC = () => {
  const beforeMintPeriod = true;

  return (
    <div className="masthead-section" id="masthead-section">
      <div className="container d-flex h-100 align-items-center justify-content-center">
        <div className="d-flex justify-content-center">
          <div className="text-center">
            <h1 className="text-uppercase">The XBirds</h1>

            {beforeMintPeriod ? <WhiteListComponent /> : <MintComponent />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
