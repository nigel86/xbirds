import {
  Web3Button,
  useContract,
  //  useContractRead,
  useAddress,
  useTotalCount,
  useTotalCirculatingSupply,
  useClaimNFT,
  useContractMetadata,
  useActiveClaimConditionForWallet,
  MediaRenderer,
  useClaimIneligibilityReasons,
} from "@thirdweb-dev/react";
import { useState } from "react";
import { ethers } from "ethers"; //BigNumberish,
import { CONTRACT_ADDRESS } from "../consts/address";
import "./MintComponent.css";

const MintComponent: React.FC = () => {
  const address = useAddress(); // client address

  const { contract } = useContract(CONTRACT_ADDRESS);

  const { data: contractMetadata, isLoading: isContractMetadataLoading } =
    useContractMetadata(contract);

  const { data: activeClaimPhase, isLoading: isActiveClaimPhaseLoading } =
    useActiveClaimConditionForWallet(contract, address);

  const { data: totalSupply, isLoading: isTotalSupplyLoading } =
    useTotalCount(contract);

  const { data: totalClaimed, isLoading: isTotalClaimedLoading } =
    useTotalCirculatingSupply(contract);

  const maxClaimable = parseInt(activeClaimPhase?.maxClaimablePerWallet || "0");

  console.log(
    isContractMetadataLoading,
    contractMetadata?.name,
    // claimIneligibility,
    // isActiveClaimPhaseLoading,
    // totalSupply,
    // isTotalSupplyLoading,
    // totalClaimed,
    // isTotalClaimedLoading,
    // maxClaimable,
    // isClaimIneligibilityLoading,
    Web3Button,
    useClaimNFT,
    MediaRenderer,
    useState,
    ethers
  );

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
      quantity: mintQuantity,
    });

  return (
    <div className="container mint-section">
      <div className="row my-4">
        <div className="col bg-white bg-opacity-10 rounded p-3 m-2">
          {!isActiveClaimPhaseLoading && (
            <div>
              <span className="d-inline-flex align-items-center">
                <img width="18" src="/assets/logo/eth.png" alt="ETH Logo" />
                <p className="h4 text-white mb-0 ml-2">
                  {ethers.utils.formatUnits(activeClaimPhase?.price!)}
                </p>
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
              <p className="h4 text-white">{totalSupply?.toNumber()}</p>
              <p className="h6 text-white-50">Total Supply</p>
            </div>
          )}
        </div>
        <div className="col bg-white bg-opacity-10 rounded p-3 m-2">
          {!isTotalClaimedLoading && (
            <div>
              <p className="h4 text-white">{totalClaimed?.toNumber()}</p>
              <p className="h6 text-white-50">Minted</p>
            </div>
          )}
        </div>
      </div>

      {address ? (
        !isClaimIneligibilityLoading ? (
          claimIneligibility?.length! > 0 ? (
            claimIneligibility?.map((reason) => <p>{reason}</p>)
          ) : (
            <div>
              <div
                className="btn-group my-4"
                role="group"
                aria-label="Basic example"
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
              <p className="h6 text-center p-1 my-3">
                You are eligible to mint •{" "}
                {`(Max claimable: ${maxClaimable} per wallet)`}
              </p>
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
    </div>
  );
};

export default MintComponent;

/* <div className="mint-section" id="mint-section">
      {!isContractMetadataLoading && (
        <div className="card">
          <MediaRenderer src={contractMetadata?.image} />
          <div className="card-body">
            <h5 className="card-title">Mint your Own XBirds Now</h5>
            <p className="card-text">.............................</p>
            {!isActiveClaimPhaseLoading ? (
              <div>
                <p>Claim Phase: {activeClaimPhase?.metadata?.name}</p>
                <p>
                  Price: {ethers.utils.formatUnits(activeClaimPhase?.price!)}
                </p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
            {!isTotalSupplyLoading && isTotalClaimedLoading ? (
              <p>
                Claimed: {totalClaimed?.toNumber()} / {totalSupply?.toNumber()}
              </p>
            ) : (
              <p>Loading...</p>
            )}
            {address ? (

              <Web3Button
                contractAddress={CONTRACT_ADDRESS}
                action={(contract) => contract.erc721.claim(1)}
              >
                Mint
              </Web3Button>
            ) : (
              <p>Connect your wallet to mint</p>
            )}
          </div>
        </div>
      )}
    </div>
    */
