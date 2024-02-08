import {
  Web3Button,
  useContract,
  //  useContractRead,
  useAddress,
  useTotalCount,
  useTotalCirculatingSupply,
  useClaimNFT,
} from "@thirdweb-dev/react";
import { useState } from "react";
import "./MintComponent.css";

const MintComponent: React.FC = () => {
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
  return (
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
          minted • 365d 5h 2m 54s
        </h6>
      </div>
    </div>
  );
};

export default MintComponent;
