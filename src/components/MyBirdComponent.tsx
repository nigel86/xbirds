import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import "./MyBirdComponent.css";
import { CONTRACT_ADDRESS } from "../consts/address";

const MyBirdComponent: React.FC = () => {
  const address = useAddress();
  const shortAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`;
  };

  const { contract } = useContract(CONTRACT_ADDRESS);
  const { data: ownedNFTs, isLoading: isOwnedNFTsLoading } = useOwnedNFTs(
    contract,
    address
  );

  return (
    <div className="container myown-section">
      {address ? (
        <div>
          <div>
            <h1>Profile in {shortAddress(address) || ""}</h1>
          </div>
          <hr />
          <div>
            <h3>My XBirds</h3>

            <div className="row">
              {!isOwnedNFTsLoading ? (
                ownedNFTs?.length! > 0 ? (
                  ownedNFTs?.map((nft) => (
                    <div key={nft.metadata.id} className="col-xs-1">
                      <ThirdwebNftMedia metadata={nft.metadata} />
                      <h3>{nft.metadata.name}</h3>
                      <p>{nft.metadata.description}</p>
                    </div>
                  ))
                ) : (
                  <p>No NFTs found. Get one now.</p>
                )
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div>
          <p>Please Connect Your Wallet.</p>
        </div>
      )}
    </div>
  );
};

export default MyBirdComponent;
