import "./TimelineComponent.css";

const TimelineComponent: React.FC = () => {
  return (
    <section className="timeline-section bg-dark d-flex align-items-center">
      <div className="container p-4 text-white">
        <div className="row text-center justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <h1 className="display-3 my-5">Mint Schedule</h1>
            <p className="my-5 text-center">Mint Phase is live SOON!</p>
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
                  <p className="h6 mt-3 mb-1">1 May 2024 UTC 05:00</p>
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
                  <p className="h6 mt-3 mb-1">2 May 2024 UTC 05:00</p>
                  <p className="h6 text-white-50 mb-0 mb-lg-0">
                    EARLYBIRD SALE
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
                  <p className="h6 mt-3 mb-1">3 May 2024 UTC 05:00</p>
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
                  <p className="h6 mt-3 mb-1">5 May 2024 UTC 14:00</p>
                  <p className="h6 text-white-50 mb-0 mb-lg-0">REVEAL PARTY</p>
                </div>
              </div>
              {/* <div className="timeline-step">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2005"
                >
                  <div className="inner-circle"></div>
                  <p className="h6 mt-3 mb-1">Q2 '24</p>
                  <p className="h6 text-white-50 mb-0 mb-lg-0">
                    PROFIT SHARING
                  </p>
                </div>
              </div>
              <div className="timeline-step mb-0">
                <div
                  className="timeline-content"
                  data-toggle="popover"
                  data-trigger="hover"
                  data-placement="top"
                  title=""
                  data-content="And here's some amazing content. It's very engaging. Right?"
                  data-original-title="2020"
                >
                  <div className="inner-circle"></div>
                  <p className="h6 mt-3 mb-1">END OF 2024</p>
                  <p className="h6 text-white-50 mb-0 mb-lg-0">
                    SOMETHING HUGE
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineComponent;
