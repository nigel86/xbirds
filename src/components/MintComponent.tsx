import {
  Web3Button,
  useContract,
  useAddress,
  useTotalCount,
  useTotalCirculatingSupply,
  // useClaimNFT,
  // useContractMetadata,
  useActiveClaimConditionForWallet,
  //MediaRenderer,
  useClaimIneligibilityReasons,
} from "@thirdweb-dev/react";
import React, { useState } from "react";
import { ethers } from "ethers";
import { CONTRACT_ADDRESS } from "../consts/address";
import "./MintComponent.css";
import { Toast, ToastContainer } from "react-bootstrap";

const MintComponent: React.FC = () => {
  const address = useAddress();
  const { contract } = useContract(CONTRACT_ADDRESS);

  // const { data: contractMetadata, isLoading: isContractMetadataLoading } =
  //   useContractMetadata(contract);

  const { data: activeClaimPhase, isLoading: isActiveClaimPhaseLoading } =
    useActiveClaimConditionForWallet(contract, address);

  const { data: totalSupply, isLoading: isTotalSupplyLoading } =
    useTotalCount(contract);

  const { data: totalClaimed, isLoading: isTotalClaimedLoading } =
    useTotalCirculatingSupply(contract);

  const maxClaimable = parseInt(activeClaimPhase?.maxClaimablePerWallet || "0");

  const [mintQuantity, setMintQuantity] = useState(1);

  const increment = () => {
    if (mintQuantity < maxClaimable) {
      setMintQuantity(mintQuantity + 1);
    }
  };

  const decrement = () => {
    if (mintQuantity > 1) {
      setMintQuantity(mintQuantity - 1);
    }
  };

  const { data: claimIneligibility, isLoading: isClaimIneligibilityLoading } =
    useClaimIneligibilityReasons(contract, {
      walletAddress: address || "",
      quantity: 1, //mintQuantity, dont want to reload
    });

  const formatPrice = () => {
    try {
      if (activeClaimPhase?.price) {
        return ethers.utils.formatUnits(activeClaimPhase.price);
      }
    } catch (error) {
      console.error("Error formatting price:", error);
      return "Invalid price";
    }
  };

  const getTotalSupply = () => {
    try {
      if (totalSupply) {
        return totalSupply.toNumber();
      }
    } catch (error) {
      console.error("Error getting total supply:", error);
      return "Invalid total supply";
    }
  };

  const getTotalClaimed = () => {
    try {
      if (totalClaimed) {
        return totalClaimed.toNumber();
      }
    } catch (error) {
      console.error("Error getting total claimed:", error);
      return "Invalid total claimed";
    }
  };

  const [showA, setShowA] = useState(false);

  const [toastMessage, setToastMessage] = useState<string>("");

  return (
    <div className="container mint-section">
      <div className="row my-4">
        <div className="col bg-white bg-opacity-10 rounded p-3 m-2">
          {!isActiveClaimPhaseLoading && (
            <div>
              <span className="d-inline-flex align-items-center">
                <img width="18" src="/assets/logo/eth.png" alt="ETH Logo" />
                <p className="h4 text-white mb-0 ml-2">{formatPrice()}</p>
              </span>
              <p className="h6 text-white-50">
                {activeClaimPhase?.metadata?.name}
              </p>
            </div>
          )}
        </div>
        <div className="col bg-white bg-opacity-10 rounded p-3 m-2">
          {!isTotalSupplyLoading && (
            <div>
              <p className="h4 text-white">{getTotalSupply()}</p>
              <p className="h6 text-white-50">Total Supply</p>
            </div>
          )}
        </div>
        <div className="col bg-white bg-opacity-10 rounded p-3 m-2">
          {!isTotalClaimedLoading && (
            <div>
              <p className="h4 text-white">{getTotalClaimed()}</p>
              <p className="h6 text-white-50">Minted</p>
            </div>
          )}
        </div>
      </div>

      <ToastContainer
        className="p-3"
        position="bottom-end"
        style={{ zIndex: 100000 }}
      >
        <Toast show={showA} onClose={() => setShowA(false)}>
          <Toast.Header>
            <strong className="me-auto">XBirds</strong>
          </Toast.Header>
          <Toast.Body className={"text-dark"}>{toastMessage}</Toast.Body>
        </Toast>
      </ToastContainer>

      {address ? (
        !isClaimIneligibilityLoading ? (
          claimIneligibility?.length! > 0 ? (
            claimIneligibility?.map((reason) => <p>{reason}</p>)
          ) : (
            <div>
              <div
                className="btn-group my-4"
                role="group"
                aria-label="btn-group"
              >
                <button
                  type="button"
                  className="btn btn-mint"
                  onClick={decrement}
                >
                  -
                </button>
                <Web3Button
                  type="button"
                  className="btn btn-mint"
                  contractAddress={CONTRACT_ADDRESS}
                  action={(contract) => contract.erc721.claim(mintQuantity)}
                  onSubmit={() => {
                    setShowA(true);
                    setToastMessage("Minting");
                  }}
                  onError={(error) => {
                    setShowA(true);
                    setToastMessage(error.message.slice(70, 500));
                  }}
                  onSuccess={() => {
                    setShowA(true);
                    setToastMessage("Minting success!");
                  }}
                >
                  Mint {mintQuantity}
                </Web3Button>
                <button
                  type="button"
                  className="btn btn-mint"
                  onClick={increment}
                >
                  +
                </button>
              </div>
            </div>
          )
        ) : (
          <p>Loading...</p>
        )
      ) : (
        <div>
          <p>Connect wallet to mint!</p>
        </div>
      )}
      <div>
        {maxClaimable <= 150 && (
          <span className="badge bg-dark text-light p-1 my-3">
            {`Max claimable: ${maxClaimable} per wallet`}
          </span>
        )}
      </div>
    </div>
  );
};

export default MintComponent;
