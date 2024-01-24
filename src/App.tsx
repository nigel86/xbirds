import {
  ConnectWallet,
  Web3Button,
  useContract,
  //  useContractRead,
  useAddress,
  useTotalCount,
  useTotalCirculatingSupply,
  useClaimNFT,
} from "@thirdweb-dev/react";
import { useState } from "react";
import "./App.css";

function App() {
  const CONTRACT_ADDR = "0xc4640C25f08f5453883f8aA07C6Cdb8d57bdd6f5";
  const { contract } = useContract(CONTRACT_ADDR);
  // const { data: totalSupply } = useContractRead(contract, "totalSupply");

  const address = useAddress(); // client address
  const { data: totalCount } = useTotalCount(contract);
  const { data: totalCirculatingSupply } = useTotalCirculatingSupply(contract);
  const { mutate: claimNft } = useClaimNFT(contract);

  const [mintCount, setMintCount] = useState(1);

  function incrementMint() {
    if (mintCount < 10) {
      setMintCount((s) => s + 1);
    }
  }

  function decrementMint() {
    if (mintCount > 1) {
      setMintCount((s) => s - 1);
    }
  }

  //const toastLiveExample = document.getElementById("liveToast");
  //const toastBootstrap = Toast.getOrCreateInstance(toastLiveExample);

  return (
    <main className="main">
      <nav
        className="navbar navbar-light fixed-top"
        aria-label="nav"
        id="mainNav"
      >
        <div className="container px-lg-5">
          <a className="navbar-brand" href="#page-top">
            <img
              src="https://cdn.discordapp.com/emojis/1195244058709348414.webp?size=96&quality=lossless"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>

          <div>
            <ConnectWallet
              className="connectWalletBtn me-4"
              btnTitle="connect wallet"
              theme={"dark"}
              switchToActiveChain={true}
              modalSize={"wide"}
              modalTitle={"Select Method"}
              welcomeScreen={{
                img: {
                  src: "assets/logo/x-circle.png",
                  width: 250,
                  height: 250,
                },
                title: "Your gateway to the XBirds World",
              }}
              modalTitleIconUrl={
                "https://cdn.discordapp.com/emojis/1195244058709348414.webp?size=96&quality=lossless"
              }
              detailsBtn={() => {
                return <button className="connectWalletBtn">My Profile</button>;
              }}
            />
          </div>
        </div>
      </nav>

      <header className="masthead-section" id="masthead">
        <div className="container d-flex h-100 align-items-center justify-content-center">
          <div className="d-flex justify-content-center">
            <div className="text-center">
              <h1 className="mx-auto my-10 text-uppercase">The XBirds</h1>
              <br />
              <br />
              <br />
              <div className="row">
                <div className="col">
                  <button
                    className="btn btn-outline-secondary in-btn"
                    type="button"
                    onClick={() => incrementMint()}
                  >
                    <i className="fa-solid fa-plus"></i>
                  </button>
                  <span>{mintCount}</span>
                  <button
                    className="btn btn-outline-secondary de-btn"
                    type="button"
                    onClick={() => decrementMint()}
                  >
                    <i className="fa-solid fa-minus"></i>
                  </button>

                  <Web3Button
                    className="connectWalletBtn"
                    contractAddress={CONTRACT_ADDR}
                    action={() =>
                      claimNft({
                        to: address,
                        quantity: mintCount,
                      })
                    }
                    // onSubmit={() => toastBootstrap.show()}
                  >
                    MINT YOURS
                  </Web3Button>
                </div>
              </div>
              <div className="toast-container position-fixed bottom-0 end-0 p-3">
                <div
                  id="liveToast"
                  className="toast align-items-center"
                  role="alert"
                  aria-live="assertive"
                  aria-atomic="true"
                >
                  <div className="d-flex">
                    <div className="toast-body">Minting in process ...</div>
                    <button
                      type="button"
                      className="btn-close me-2 m-auto"
                      data-bs-dismiss="toast"
                      aria-label="Close"
                    ></button>
                  </div>
                </div>
              </div>
              <h6>
                {totalCirculatingSupply?.toString()} / {totalCount?.toString()}
                minted • 36d 5h 2m 54s
              </h6>
            </div>
          </div>
        </div>
      </header>

      <section className="story-section" id="story">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-10">
              <h2 className="text-white my-5 text-center">
                The Tale of XBirds
              </h2>
              <p className="text-white-50 my-5">
                In the ethereal realm of Aerendir Eyrie, once a haven for the
                graceful Moonbirds, a catastrophic event called the Celestial
                Turbulence shattered their tranquility. Envious of the
                Moonbirds' radiant beauty, the malevolent Shadow Sirens
                attacked, pushing the avian community to the brink of
                extinction. Amidst this chaos emerged Luminarael, a cosmic
                guardian with ancient wisdom and advanced technology. To save
                the Moonbirds, Luminarael transformed them into the
                awe-inspiring XBirds—half-organic, half-mechanical aviators,
                each blessed with unique powers forged from celestial energy and
                cybernetic enhancements.
              </p>
              <p className="text-white-50 my-5">
                Now united as defenders of Aerendir Eyrie, the XBirds soar
                through rejuvenated skies, safeguarding against remnants of the
                Celestial Turbulence. Guided by Luminarael's legacy, these
                cyborg avian beings embark on quests, forge alliances, and
                navigate a world teeming with ancient mysteries. As they strive
                to restore balance and harmony to their realm, the XBirds, each
                with their distinct identity and powers, stand as a testament to
                resilience and transformation in the face of cosmic adversity.
                Through their journey, they seek not only to protect their home
                but also to discover the true extent of their extraordinary
                potential and the unity born from their shared struggles.
              </p>
            </div>
          </div>
        </div>
        <img
          className="img-fluid"
          src="assets/img/blue-light-sky.png"
          alt="..."
        />
      </section>

      <section className="intro-section bg-dark" id="intro">
        <div className="container my-5 text-white-50">
          <div className="row">
            <div className="col-md-8">
              <h2 className="text-white text-center mb-5">
                Discover the XBirds World
              </h2>
              <p>
                XBirds is a collection of 1,000 hand-drawn unique NFT birds
                living on the Optimism blockchain. Your xBird grants access to
                members-only experience and rewards. Future areas and perks can
                be unlocked by the community through roadmap activation.
              </p>
            </div>

            <div className="col-md-4">
              <div className="row g-4">
                <div className="col-6">
                  <img
                    src="assets/nft/1.jpg"
                    className="img-fluid rounded d-block mx-auto"
                    alt="Grid 1"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="assets/nft/2.jpg"
                    className="img-fluid rounded d-block mx-auto"
                    alt="Grid 2"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="assets/nft/3.jpg"
                    className="img-fluid rounded d-block mx-auto"
                    alt="Grid 3"
                  />
                </div>
                <div className="col-6">
                  <img
                    src="assets/nft/4.jpg"
                    className="img-fluid rounded d-block mx-auto"
                    alt="Grid 4"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="weapon-section bg-dark" id="weapon">
        <div className="container my-5 text-white-50">
          <div className="row">
            <div className="col">
              <h2 className="text-white text-center mb-5">The Powers Of X</h2>
            </div>
          </div>
          <div className="row my-5 justify-content-center">
            <div className="col-md-2 col-sm-4 mb-4">
              <img
                src="assets/img/weapon1.jpg"
                alt="X-Bird Power 1"
                className="img-fluid"
              />
              <div className="caption text-center mt-2">
                <p className="mb-1 text-secondary">Celestial Wing Blades</p>
                <p className="mb-0 text-secondary fw-light">Secret Rare</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 mb-4">
              <img
                src="assets/img/weapon2.jpg"
                alt="X-Bird Power 2"
                className="img-fluid"
              />
              <div className="caption text-center mt-2">
                <p className="mb-1 text-secondary">Resonant Energy Shield</p>
                <p className="mb-0 text-secondary fw-light">Ultra Rare</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 mb-4">
              <img
                src="assets/img/weapon3.jpg"
                alt="X-Bird Power 3"
                className="img-fluid"
              />
              <div className="caption text-center mt-2">
                <p className="mb-1 text-secondary">Stellar Cannon Blaster</p>
                <p className="mb-0 text-secondary fw-light">Rare</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 mb-4">
              <img
                src="assets/img/weapon4.jpg"
                alt="X-Bird Power 4"
                className="img-fluid"
              />
              <div className="caption text-center mt-2">
                <p className="mb-1 text-secondary">Mind's Eye Gauntlet</p>
                <p className="mb-0 text-secondary fw-light">Uncommon</p>
              </div>
            </div>

            <div className="col-md-2 col-sm-4 mb-4">
              <img
                src="assets/img/weapon5.jpg"
                alt="X-Bird Power 5"
                className="img-fluid"
              />
              <div className="caption text-center mt-2">
                <p className="mb-1 text-secondary">Harmonic Prism</p>
                <p className="mb-0 text-secondary fw-light">Common</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="timeline-section bg-dark" id="timeline1">
        <div className="container my-5 text-white">
          <div className="row text-center justify-content-center">
            <div className="col-xl-6 col-lg-8">
              <h2 className="my-5 font-weight-bold">XBirds Evolution</h2>
              <p className="my-5 text-white-50">
                We’re very proud of the path we’ve taken. Explore the history
                that made us who we are today.
              </p>
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
                    <p className="h6 mt-3 mb-1">29 Mar '24</p>
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
                    <p className="h6 mt-3 mb-1">30 Mar '24</p>
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
                    <p className="h6 mt-3 mb-1">01 Apr '24</p>
                    <p className="h6 text-white-50 mb-0 mb-lg-0">THE REVEAL</p>
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
                    <p className="h6 mt-3 mb-1">Q3 '24</p>
                    <p className="h6 text-white-50 mb-0 mb-lg-0">
                      SOMETHING HUGE
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section bg-dark" id="team">
        <div className="container text-white my-5">
          <div className="row justify-content-center">
            <div className="col">
              <div className="section_heading text-center wow fadeInUp">
                <h3 className="my-5">
                  Our Creative <span> Team</span>
                </h3>
                <p className="my-5 text-white-50">
                  Discover the masterminds behind XBirds, crafting innovation
                  through creativity and imagination.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="profile wow fadeInUp">
                <div className="profile_thumb">
                  <img src="assets/nft/1.jpg" className="img-fluid" alt="" />
                </div>
                <div className="profile-detail">
                  <h6>mattgene.eth</h6>
                  <p className="role">Lead Designer</p>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-medium"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile wow fadeInUp">
                <div className="profile_thumb">
                  <img src="assets/nft/2.jpg" className="img-fluid" alt="" />
                </div>
                <div className="profile-detail">
                  <h6>davidsfh40542.eth</h6>
                  <p className="role">Content Director</p>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-discord"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile wow fadeInUp">
                <div className="profile_thumb">
                  <img src="assets/nft/3.jpg" className="img-fluid" alt="" />
                </div>
                <div className="profile-detail">
                  <h6>nigel86.eth</h6>
                  <p className="role">Developer</p>{" "}
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a className="mx-1 text-white" href="#">
                    <i className="fa-brands fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq-section bg-dark" id="faq">
        <div className="container text-white my-5">
          <div className="row">
            <div className="col-md-2"> </div>
            <div className="col-md-8">
              <h2 className="text-center my-5">Frequently Asked Questions</h2>
              <p className="my-5 text-white-50">
                Thank you so much for the interest to our project! If you have
                any questions or feedback, feel free to contact us!
              </p>
              <div className="accordion accordion-flush" id="accordionParent">
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
                      HOW MANY PEOPLE OF CAPTAIN LASERHAWK: A BLOOD DRAGON REMIX
                      - THE SANDBOX AVATAR COLLECTION ARE THERE?
                    </button>
                  </h2>
                  <div
                    id="collapseOne"
                    className="accordion-collapse collapse "
                    aria-labelledby="headingOne"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 1</strong> - Placeholder text for the answer.
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
                      HOW DOES RARITY WORK?
                    </button>
                  </h2>
                  <div
                    id="collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwo"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 2</strong> - Placeholder text for the answer.
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
                      WHERE DO I GET MY AVATAR
                    </button>
                  </h2>
                  <div
                    id="collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThree"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 3</strong> - Placeholder text for the answer.
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
                      WHAT IS AN ALLOWLIST?
                    </button>
                  </h2>
                  <div
                    id="collapseFour"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFour"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 4</strong> - Placeholder text for the answer.
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
                      WHEN IS THE SALE AND HOW MANY AVATARS CAN I BUY?
                    </button>
                  </h2>
                  <div
                    id="collapseFive"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingFive"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 5</strong> - Placeholder text for the answer.
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
                      HOW MUCH SHOULD I EXPECT TO PAY FOR ONE AVATAR NFT?
                    </button>
                  </h2>
                  <div
                    id="collapseSix"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSix"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 6</strong> - Placeholder text for the answer.
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
                      HOW DO I GET ALLOW LISTED?
                    </button>
                  </h2>
                  <div
                    id="collapseSeven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingSeven"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 7</strong> - Placeholder text for the answer.
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
                      HOW CAN I JOIN THE ALLOW LIST FOR HEYMINT?
                    </button>
                  </h2>
                  <div
                    id="collapseEight"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEight"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 8</strong> - Placeholder text for the answer.
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
                      WHEN WILL THE ALLOW LIST FOR HEYMINT.XYZ BE OPENED?
                    </button>
                  </h2>
                  <div
                    id="collapseNine"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingNine"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 9</strong> - Placeholder text for the answer.
                    </div>
                  </div>
                </div>

                {/* 10 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTen">
                    <button
                      className="accordion-button  collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTen"
                      aria-expanded="false"
                      aria-controls="collapseTen"
                    >
                      HOW MANY SPOTS ARE AVAILABLE ON THE ALLOW LIST?
                    </button>
                  </h2>
                  <div
                    id="collapseTen"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTen"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 10</strong> - Placeholder text for the answer.
                    </div>
                  </div>
                </div>

                {/* 11 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEleven">
                    <button
                      className="accordion-button  collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseEleven"
                      aria-expanded="false"
                      aria-controls="collapseEleven"
                    >
                      WHEN WILL THE ALLOW LIST FOR HEYMINT CLOSE?
                    </button>
                  </h2>
                  <div
                    id="collapseEleven"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingEleven"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 11</strong> - Placeholder text for the answer.
                    </div>
                  </div>
                </div>

                {/* 12 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwelve">
                    <button
                      className="accordion-button  collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseTwelve"
                      aria-expanded="false"
                      aria-controls="collapseTwelve"
                    >
                      CAN I ACCESS HEYMINT.XYZ THROUGH ANY OTHER MEANS EXCEPT
                      FOR THE LINK SHARED BY THE SANDBOX?
                    </button>
                  </h2>
                  <div
                    id="collapseTwelve"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingTwelve"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 12</strong> - Placeholder text for the answer.
                    </div>
                  </div>
                </div>

                {/* 13 */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThirteen">
                    <button
                      className="accordion-button  collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapseThirteen"
                      aria-expanded="false"
                      aria-controls="collapseThirteen"
                    >
                      HOW DO I KNOW IF I'M ALLOW LISTED?
                    </button>
                  </h2>
                  <div
                    id="collapseThirteen"
                    className="accordion-collapse collapse"
                    aria-labelledby="headingThirteen"
                    data-bs-parent="#accordionParent"
                  >
                    <div className="accordion-body ">
                      <strong> 13</strong> - Placeholder text for the answer.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-2"> </div>
          </div>
        </div>
      </section>

      <section className="join-section" id="join">
        <div className="container">
          <div className="row gx-4 gx-lg-5">
            <div className="col-md-10 col-lg-8 mx-auto text-center">
              <i className="far fa-paper-plane fa-2x mb-2 text-white"></i>
              <h2 className="text-white mb-5">Join our Forest</h2>
              <a
                href="https://discord.com/channels/1037228976852185108/1037228977292574731"
                className="join-icon"
                target="_blank"
              >
                <i className="fa-brands fa-discord"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer bg-black small text-center text-white-50 text-center text-lg-start ">
        <div className="d-flex justify-content-center justify-content-lg-between p-4">
          <div className="me-5">
            <span>
              Buidl with <i className="fa-solid fa-heart"></i> on
              <img
                className="mx-2"
                src="assets/logo/op.svg"
                alt="External Logo"
                width="100"
              />
            </span>
          </div>
          <div className="social-icons">
            <a
              href="https://optimistic.etherscan.io/"
              className="icon"
              target="_blank"
            >
              <img src="assets/logo/etherscan.svg" width="20" />
            </a>
            <a
              href="https://twitter.com/XBirdsDAO"
              className="icon"
              target="_blank"
            >
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </div>
        <div className="container text-center p-4">
          <p className="fw-bold">XBirds</p> Copyright © 2023-2024 All Rights
          Reserved
        </div>
      </footer>

      {/* Core theme JSss
    <script src="js/scripts.js"></script>
*/}

      {/*<script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>*/}
    </main>
  );
}

export default App;
