import "./TimelineComponent.css";

const TimelineComponent: React.FC = () => {
  return (
    <section className="timeline-section bg-dark d-flex align-items-center">
      <div className="container p-4 text-white">
        <div className="row text-center justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <h1 className="display-3 my-5">Mint Schedule</h1>
            <p className="my-5 text-center">Mint Phase is coming SOON!</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div
              className="timeline-steps aos-init aos-animate"
              data-aos="fade-up"
            >
              <div className="timeline-step">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2003"
                >
                  <div className="inner-circle"></div>
                  <p className="h6 mt-3 mb-1">1 May 2024 13:00 UTC</p>
                  <p className="h6 text-white-50 mb-0 mb-lg-0">
                    WHITELIST SALE
                  </p>
                </div>
              </div>

              <div className="timeline-step">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2004"
                >
                  <div className="inner-circle"></div>
                  <p className="h6 mt-3 mb-1">1 May 2024 16:00 UTC</p>
                  <p className="h6 text-white-50 mb-0 mb-lg-0">PUBLIC SALE</p>
                </div>
              </div>
              <div className="timeline-step">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2004"
                >
                  <div className="inner-circle"></div>
                  <p className="h6 mt-3 mb-1">5 May 2024 14:00 UTC (TBA)</p>
                  <p className="h6 text-white-50 mb-0 mb-lg-0">REVEAL</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;
