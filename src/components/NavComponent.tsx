import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import "./NavComponent.css";

const NavComponent: React.FC = () => {
  const address = useAddress();
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

          <ul className="navbar-nav">
            {address && (
              <li className="nav-item">
                <a
                  className="nav-link active"
                  aria-current="page"
                  href={`/profile/${address}`}
                >
                  My birds
                </a>
              </li>
            )}
          </ul>
          <div>
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
              modalTitleIconUrl={
                "https://cdn.discordapp.com/emojis/1195244058709348414.webp?size=96&quality=lossless"
              }
              detailsBtn={() => {
                return <button className={"walletbtn me-4"}>My Profile</button>;
              }}
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavComponent;
