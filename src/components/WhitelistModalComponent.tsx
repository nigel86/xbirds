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
      {showFooter && (
        <div className="footer">
          <h3>Whitelist Eligibility Checker</h3>
          <p className="text-muted">
            {address
              ? isWhitelisted
                ? "Congratulations 🎉🥳 You can come and mint on 1 May 2024."
                : "Sorry 🥺🥺 You are not eligible for Whitelist sale. Join us 3 May 2024 for early bird public sale."
              : "Please connect wallet"}
          </p>
          <button className="btn btn-secondary" onClick={handleCloseFooter}>
            Got it
          </button>
        </div>
      )}
    </section>
  );
};

export default WhitelistModalComponent;
