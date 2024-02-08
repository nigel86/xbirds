import { ConnectWallet } from "@thirdweb-dev/react";
import "./NavComponent.css";

const NavComponent: React.FC = () => {
  return (
    <nav
      className={"nav-section navbar navbar-light fixed-top"}
      aria-label="nav"
      id="nav-section"
    >
      <div className="container">
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
            className={"walletbtn"}
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
              return <button className={"walletbtn me-4"}>My Profile</button>;
            }}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavComponent;
