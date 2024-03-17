import "./IntroComponent.css";

const IntroComponent: React.FC = () => {
  return (
    <section className="intro-section bg-dark d-flex align-items-center">
      <div className="container px-4">
        <div className="row  justify-content-center">
          <div className="col-12 col-md-6 col-lg-7">
            <div className="badge rounded-pill text-dark mt-4 mb-2 custom-badge">
              <div className="text-uppercase">Live on OP Mainnet</div>
            </div>
            <h1 className="display-3 mb-4">What is XBirds?</h1>
            <p className="mb-4">
              XBirds is a collection of 5,000 meticulously hand-drawn and
              distinctive NFT birds residing on the Optimism blockchain. Beyond
              the mesmerizing art, each XBird offers exclusive access to a realm
              of abundance and rewards. Join us on this remarkable journey and
              become part of the XBirds saga!
            </p>

            {/* <div className="d-grid gap-3 d-md-flex justify-content-center mb-3">
              <button
                type="button"
                className="btn px-3 py-2 me-md-3 custom-outline mb-1 mb-md-0 btn-fixed-size"
              >
                XBirds Quest
              </button>
              <button
                type="button"
                className="btn px-3 py-2 btn-outline-secondary btn-fixed-size"
              >
                Details
              </button>
            </div> */}
            <div className="d-flex justify-content-center justify-content-md-start mb-3">
              <button
                type="button"
                className="btn px-3 py-2 me-3 custom-outline mb-1 mb-md-0 btn-fixed-size"
              >
                XBirds Quest
              </button>
              <button
                type="button"
                className="btn px-3 py-2 btn-outline-secondary btn-fixed-size"
              >
                Details
              </button>
            </div>
          </div>
          <div className="col-12 col-md-1 col-lg-1"></div>
          <div className="col-8 col-md-5 col-lg-4 d-flex align-items-center my-3">
            <img
              src="assets/nft/xbirds-water.jpg"
              alt="Image"
              className="img-thumbnail"
            />
          </div>
        </div>

        <div className="row my-4 justify-content-center">
          <div className="col-12 col-md-4 text-center mb-4">
            <h6 className="mb-0">Whitelist Price</h6>
            <h1 className="display-3 fw-bold text-primary mb-0">Ξ 0.01</h1>
            <h6 className="text-secondary">Check eligiblity</h6>
          </div>
          <div className="col-12 col-md-4 text-center mb-4">
            <h6 className="mb-0">Earlybird Price</h6>
            <h1 className="display-3 fw-bold text-primary mb-0">Ξ 0.015</h1>
            <h6 className="text-white-50">First 48 hours of public mint</h6>
          </div>
          <div className="col-12 col-md-4 text-center mb-4">
            <h6 className="mb-0">Public Price</h6>
            <h1 className="display-3 fw-bold text-primary mb-0">Ξ 0.02</h1>
            <h6 className="text-white-50">Only 5000 XBirds in total</h6>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroComponent;

// import "./IntroComponent.css";

// const IntroComponent: React.FC = () => {
//   return (
//     <section className="intro-section bg-dark d-flex align-items-center">
//       <div className="container">
//         <div className="row">
//           <div className="col-12 col-lg-7 px-4">
//             <div className="badge rounded-pill text-dark my-4 custom-badge">
//               <div className="text-uppercase">Live on OP Mainnet</div>
//             </div>

//             <h1 className="fw-bolder mb-2 mb-sm-5 ">What is XBirds? 111 </h1>
//             <p className="fw-lighter mb-2 mb-sm-5">
//               XBirds is a collection of 5,000 meticulously hand-drawn and
//               distinctive NFT birds residing on the Optimism blockchain. Beyond
//               the mesmerizing art, each XBird offers exclusive access to a realm
//               of abundance and rewards. Join us on this remarkable journey and
//               become part of the XBirds saga!
//             </p>

//             <div className="d-grid gap-3 d-flex justify-content-sm-start">
//               <button
//                 type="button"
//                 className="btn btn-lg px-5 py-sm-3 me-sm-3 fs-6 fw-bolder custom-outline"
//               >
//                 XBirds Quest
//               </button>
//               <button
//                 type="button"
//                 className="btn btn-lg px-5 py-3 fs-6 fw-bolder btn-outline-secondary"
//               >
//                 Details
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="row mt-4 justify-content-center">
//           <div className="col-12 col-sm-4 text-center my-4">
//             <h5>Whitelist Price</h5>
//             <p className="h1 fw-bold text-primary">0.01 ETH</p>
//             <p className="h6 mt-1 text-secondary">Check eligiblity</p>
//           </div>
//           <div className="col-12 col-sm-4 text-center my-4">
//             <h5>Earlybird Price</h5>
//             <p className="h1 fw-bold text-primary">0.015 ETH</p>
//             <p className="h6 mt-1 text-white-50">
//               First 48 hours of public mint
//             </p>
//           </div>
//           <div className="col-12 col-sm-4 text-center  my-4">
//             <h5>Public Price</h5>
//             <p className="h1 fw-bold text-primary">0.02 ETH</p>
//             <p className="h6 mt-1 text-white-50">Only 5000 XBirds in total</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default IntroComponent;
