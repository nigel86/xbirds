import "./StoryComponent.css";

const StoryComponent: React.FC = () => {
  return (
    <section className="story-section px-3">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-4">
            <h1 className="display-3 mb-3 mb-sm-5 text-center">
              The Tale of XBirds
            </h1>
          </div>
          <div className="col-12 col-lg-8 text-center">
            <p>
              In the celestial realm of Aerendir Eyrie, once home to the
              graceful Moonbirds, tragedy struck with the arrival of the
              Celestial Turbulence—a malevolent force corrupting all life. As
              chaos reigned, the Metaodys Space Rangers intervened, deploying
              the transformative Luminarael Crystal.
            </p>
            <p>
              Thus, the XBirds were born—half-organic, half-mechanical aviators
              with unique powers, rising against cosmic adversity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoryComponent;
