import "./JoinComponent.css";

const JoinComponent: React.FC = () => {
  return (
    <section className="join-section" id="join-section">
      <div className="container text-center">
        <h2 className="text-white mb-5">Join our Forest</h2>
        <div className="d-none d-md-block">
          <div className="row justify-content-center">
            <div className="col-md-6 d-flex justify-content-center align-items-center">
              <a
                href="https://discord.gg/gbvDRJsKDc"
                className="join-icon join-discord-icon mx-4"
                target="_blank"
              >
                <img
                  src="assets/logo/discord-white.svg"
                  alt="Logo"
                  width="50"
                />
              </a>
              <a
                href="https://twitter.com/XBirdsDAO"
                className="join-icon join-twitter-icon mx-4"
                target="_blank"
              >
                <img src="assets/logo/x-white.png" alt="Logo" width="40" />
              </a>
              <a
                href="https://galxe.com/XBirds"
                className="join-icon join-galxe-icon mx-4"
                target="_blank"
              >
                <img src="assets/logo/galxe.svg" alt="Logo" width="50" />
              </a>
              <a
                href="https://xbirds.gitbook.io/xbirds-docs/"
                className="join-icon join-gitbook-icon mx-4"
                target="_blank"
              >
                <img src="assets/logo/gitbook.svg" alt="Logo" width="50" />
              </a>
              {/* below need change */}
              <a
                href="opensea"
                className="join-icon join-gitbook-icon mx-4"
                target="_blank"
              >
                <img src="assets/logo/opensea.svg" alt="Logo" width="50" />
              </a>

              <a
                href="op scan explorer"
                className="join-icon join-gitbook-icon mx-4"
                target="_blank"
              >
                <img src="assets/logo/etherscan.svg" alt="Logo" width="50" />
              </a>
            </div>
          </div>
        </div>

        <div className="row d-md-none">
          <div className="col-12 mb-5">
            <a
              href="https://discord.gg/gbvDRJsKDc"
              className="join-icon p-4"
              target="_blank"
            >
              <img src="assets/logo/discord-white.svg" alt="Logo" width="50" />
            </a>
            <a
              href="https://twitter.com/XBirdsDAO"
              className="join-icon p-4"
              target="_blank"
            >
              <img src="assets/logo/x-white.png" alt="Logo" width="40" />
            </a>
            <a
              href="https://galxe.com/XBirds"
              className="join-icon p-4"
              target="_blank"
            >
              <img src="assets/logo/galxe.svg" alt="Logo" width="50" />
            </a>
          </div>

          <div className="col-12">
            <a
              href="https://xbirds.gitbook.io/xbirds-docs/"
              className="join-icon p-4"
              target="_blank"
            >
              <img src="assets/logo/gitbook.svg" alt="Logo" width="50" />
            </a>

            <a
              href="opensea"
              className="join-icon join-gitbook-icon mx-4"
              target="_blank"
            >
              <img src="assets/logo/opensea.svg" alt="Logo" width="50" />
            </a>

            <a
              href="https://basescan.org"
              className="join-icon join-gitbook-icon mx-4"
              target="_blank"
            >
              <img src="assets/logo/etherscan.svg" alt="Logo" width="50" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JoinComponent;
