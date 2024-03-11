import "./StoryComponent.css";

const StoryComponent: React.FC = () => {
  return (
    <section className="story-section" id="story-section">
      <div className="container p-4">
        <h2 className="my-5 text-center">The Tale of XBirds</h2>
        <p className="text-white-50">
          In the celestial realm of Aerendir Eyrie, once home to the graceful
          Moonbirds, tragedy struck with the arrival of the Celestial
          Turbulence—a malevolent force corrupting all life. As chaos reigned,
          the Metaodys Space Rangers intervened, deploying the transformative
          Luminarael Crystal. Thus, the XBirds were born—half-organic,
          half-mechanical aviators with unique powers, rising against cosmic
          adversity.
        </p>
      </div>
    </section>
  );
};

export default StoryComponent;
