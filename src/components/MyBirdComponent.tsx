import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import "./MyBirdComponent.css";
import { CONTRACT_ADDRESS } from "../consts/address";

const MyBirdComponent = () => {
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
    <section className="mybird-section bg-dark">
      <div className="container px-3">
        {address ? (
          <div>
            <div>
              <h1>My XBirds in {shortAddress(address) || ""}</h1>
            </div>
            <hr />

            <div>
              <div className="row text-center">
                {!isOwnedNFTsLoading ? (
                  ownedNFTs?.length! > 0 ? (
                    ownedNFTs?.map((nft) => (
                      <div
                        key={nft.metadata.id}
                        className="col-6 col-md-4 mb-5 mb-md-0"
                      >
                        <ThirdwebNftMedia
                          metadata={nft.metadata}
                          width="150"
                          height="150"
                          className="w-50 mb-3 shadow "
                        />

                        <h3> {nft.metadata.name}</h3>
                      </div>
                    ))
                  ) : (
                    <div>
                      <p>No NFTs found. Get one now.</p>
                    </div>
                  )
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h1>Please Connect Your Wallet.</h1>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBirdComponent;
