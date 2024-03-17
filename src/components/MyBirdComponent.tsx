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
              <div className="row">
                {!isOwnedNFTsLoading ? (
                  ownedNFTs?.length! > 0 ? (
                    ownedNFTs?.map((nft) => (
                      <div
                        key={nft.metadata.id}
                        className="col-auto col-lg-3 g-3 position-relative"
                      >
                        <div className="text-white position-absolute bottom-0 start-0 w-100 text-center">
                          <div>
                            <h3 className="glass_background mx-2 text-white">
                              {nft.metadata.name}
                            </h3>
                          </div>
                        </div>
                        <div className="text-center">
                          <ThirdwebNftMedia
                            metadata={nft.metadata}
                            width={180}
                            height={180}
                            className="card-img-top mx-auto"
                          />
                        </div>

                        {/*<div className="card bg-dark text-center border-primary">
                          <ThirdwebNftMedia
                            metadata={nft.metadata}
                            width={150}
                            height={150}
                            className="card-img-top mx-auto"
                          />
                          <div className="card-body">
                            <h5 className="card-title text-primary">
                              {nft.metadata.name}
                            </h5>
                          </div>
                    </div>*/}
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
