import { ConnectWallet } from "@thirdweb-dev/react";

import "./NavComponent.css";

const NavComponent = () => {
  //const address = useAddress();
  return (
    <div>
      <nav
        className="nav-section navbar navbar-light fixed-top"
        aria-label="nav"
        id="nav-section"
      >
        <div className="container">
          <a className="navbar-brand" href="#page-top">
            <img
              src="assets/logo/xbirds.png"
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top"
            />
          </a>

          <ConnectWallet
            className={"walletbtn"}
            btnTitle="Connect Wallet"
            theme={"dark"}
            switchToActiveChain={true}
            modalSize={"wide"}
            modalTitle={"Select Method"}
            welcomeScreen={{
              img: {
                src: "assets/img/wallet-connect.png",
                width: 250,
                height: 250,
              },
              title: "Your gateway to the XBirds World",
            }}
            modalTitleIconUrl={"assets/logo/xbirds.png"}
            detailsBtn={() => {
              return (
                <div className="d-flex align-items-center">
                  {/*<a
                    href={`/birds/${address}`}
                    className="btn walletbtn me-3"
              >My XBirds</a>*/}
                  <button className={"walletbtn me-4"}>My Wallet</button>
                </div>
              );
            }}
          />
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
