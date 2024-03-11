import "./StoryComponent.css";

const StoryComponent: React.FC = () => {
  return (
    <section className="story-section" id="story-section">
      {/* <div className="container p-4 d-flex justify-content-center">
        <h1 className="display-3 fw-bolder mb-3 mb-sm-5 pt-4 text-center">
          <span>The Tale of XBirds</span>
        </h1>
        <div className="h3 w-75 fw-light pt-5 mb-4 mb-sm-5">
          In the celestial realm of Aerendir Eyrie, once home to the graceful
          Moonbirds, tragedy struck with the arrival of the Celestial
          Turbulence—a malevolent force corrupting all life. As chaos reigned,
          the Metaodys Space Rangers intervened, deploying the transformative
          Luminarael Crystal. Thus, the XBirds were born—half-organic,
          half-mechanical aviators with unique powers, rising against cosmic
          adversity.
        </div>
      </div> */}

      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <h1 className="display-3 fw-bolder mb-3 mb-sm-5 text-center">
              <span>The Tale of XBirds</span>
            </h1>
          </div>
          <div className="col-12 col-lg-8">
            <div className="h3 p-4">
              In the celestial realm of Aerendir Eyrie, once home to the
              graceful Moonbirds, tragedy struck with the arrival of the
              Celestial Turbulence—a malevolent force corrupting all life. As
              chaos reigned, the Metaodys Space Rangers intervened, deploying
              the transformative Luminarael Crystal. Thus, the XBirds were
              born—half-organic, half-mechanical aviators with unique powers,
              rising against cosmic adversity.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryComponent;
