import "./JoinComponent.css";

const JoinComponent: React.FC = () => {
  return (
    <div>
      <section className="join-section" id="join-section">
        <div className="container text-center">
          <h2 className="text-white mb-5">Join our Forest</h2>
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <a
                href="https://discord.gg/gbvDRJsKDc"
                className="join-icon join-discord-icon mx-4"
                target="_blank"
              >
                <i className="fab fa-discord fa-4x"></i>
              </a>
              <a
                href="https://twitter.com/XBirdsDAO"
                className="join-icon join-twitter-icon mx-4"
                target="_blank"
              >
                <i className="fa-brands fa-x-twitter fa-4x"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinComponent;
