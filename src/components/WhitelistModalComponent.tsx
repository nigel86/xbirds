import "./WhitelistModalComponent.css";
import Whitelist from "./Whitelist";
import { useAddress } from "@thirdweb-dev/react";
import { useState } from "react";

const WhitelistModalComponent = () => {
  const address = useAddress();

  const [showFooter, setShowFooter] = useState(true);

  const handleCloseFooter = () => {
    setShowFooter(false);
  };

  // Check if the address is in the whitelist
  const isWhitelisted =
    address !== undefined ? Whitelist.includes(address) : false;

  return (
    <section className="modal-section">
      <div className="container">
        {showFooter && (
          <div className="d-md-flex d-xs-block align-items-center justify-content-center">
            <p className="h6 my-md-0">
              {address
                ? isWhitelisted
                  ? "Congratulations 🎉🥳 You are on our Whitelist! Minting is avaliable on 1 May 2024."
                  : "Sorry 🥺🥺 You are not eligible for Whitelist sale. Join us 2 May 2024 for Earlybird Sale."
                : "Connect wallet to check Whitelist Eligibility."}
            </p>
            <span className="flex-grow-1"></span>
            <button className="btn btn-secondary" onClick={handleCloseFooter}>
              Got it
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default WhitelistModalComponent;
