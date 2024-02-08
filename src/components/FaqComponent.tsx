import "./FaqComponent.css";

const FaqComponent: React.FC = () => {
  return (
    <section className="faq-section bg-dark" id="faq-section">
      <div className="container">
        <h3 className="py-5 text-center">Frequently Asked Questions</h3>
        <p className="mb-5 text-white-50">
          Thank you so much for the interest to our project! If you have any
          questions or feedback, feel free to contact us!
        </p>
        <div
          className="mx-md-5 px-md-5 accordion accordion-flush"
          id="accordionParent"
        >
          {/* 1 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Where can I mint my XBirds?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne"
              data-bs-parent="#accordionParent"
            >
              <div className="accordion-body">
                You can mint the XBirds NFT simply on and only on{" "}
                <a
                  href="https://xbirds.art/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://xbirds.art/
                </a>
              </div>
            </div>
          </div>

          {/* 2 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Which blockchain is XBirds on?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionParent"
            >
              <div className="accordion-body ">
                Optimism. The contract address is 0xxxxxxxxxxxxxxxxxxxxxxxx.
              </div>
            </div>
          </div>

          {/* 3 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                When is the mint date?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionParent"
            >
              <div className="accordion-body ">
                The official mint schedule will be starting from 1st Apr 2024
                4am UTC. Please see our GitBook for detailed information.
              </div>
            </div>
          </div>

          {/* 4 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How can I become eligible for the whitelist mint?
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              aria-labelledby="headingFour"
              data-bs-parent="#accordionParent"
            >
              <div className="accordion-body ">
                To qualify for the whitelist mint, you must successfully
                complete all tasks on QuestN before the designated deadline, and
                hold the whitelist NFT on snapshot time. Please stay tuned to
                our social media for detailed instructions and updates!
              </div>
            </div>
          </div>

          {/* 5 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                What is the maximum number of XBirds that can be minted per
                wallet?
              </button>
            </h2>
            <div
              id="collapseFive"
              className="accordion-collapse collapse"
              aria-labelledby="headingFive"
              data-bs-parent="#accordionParent"
            >
              <div className="accordion-body ">
                For whitelist mint, each wallet is limited to a maximum of 5
                XBirds. However, for public mint, there are no restrictions, and
                you are free to mint as many as you desire until the total
                supply (5,000) is exhausted.
              </div>
            </div>
          </div>

          {/* 6 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSix">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSix"
                aria-expanded="false"
                aria-controls="collapseSix"
              >
                What is the mint price and what token is used for minting?
              </button>
            </h2>
            <div
              id="collapseSix"
              className="accordion-collapse collapse"
              aria-labelledby="headingSix"
              data-bs-parent="#accordionParent"
            >
              <div className="accordion-body ">
                In order to support our beloved Optimism Chain, The minting
                token will be Optimism token(OP). The price for whitelist is 15
                OP/mint. For public mint, price will be 20 OP/mint.
              </div>
            </div>
          </div>
          {/* 7 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingSeven">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseSeven"
                aria-expanded="false"
                aria-controls="collapseSeven"
              >
                What should I do if I missed the public mint?
              </button>
            </h2>
            <div
              id="collapseSeven"
              className="accordion-collapse collapse"
              aria-labelledby="headingSeven"
              data-bs-parent="#accordionParent"
            >
              <div className="accordion-body ">
                You can trade XBirds from secondary market places, such as
                Opensea.
              </div>
            </div>
          </div>

          {/* 8 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingEight">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseEight"
                aria-expanded="false"
                aria-controls="collapseEight"
              >
                What can I expect from holding XBirds?
              </button>
            </h2>
            <div
              id="collapseEight"
              className="accordion-collapse collapse"
              aria-labelledby="headingEight"
              data-bs-parent="#accordionParent"
            >
              <div className="accordion-body ">
                As per our slogan, "Flying Freely Beyond Boundaries: No Roadmap,
                Just Profits!", from the moment you start holding XBirds, you
                become a participant in our profit-sharing ecosystem.
              </div>
            </div>
          </div>

          {/* 9 */}
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingNine">
              <button
                className="accordion-button  collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseNine"
                aria-expanded="false"
                aria-controls="collapseNine"
              >
                Is the rarity of my XBirds has anything to do with the
                empowerment in the ecosystem?
              </button>
            </h2>
            <div
              id="collapseNine"
              className="accordion-collapse collapse"
              aria-labelledby="headingNine"
              data-bs-parent="#accordionParent"
            >
              <div className="accordion-body ">
                XBirds is a fully hand-drawn, truly unique art collection. By
                acquiring an XBird, you gain the exclusive opportunity to
                partake in our thriving profit-sharing system. Notably,
                legendary XBirds hold a distinguished status, entitling their
                holders to a more significant share privilege.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqComponent;
