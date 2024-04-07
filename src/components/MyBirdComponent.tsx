import {
  ThirdwebNftMedia,
  useAddress,
  useContract,
  useOwnedNFTs,
} from "@thirdweb-dev/react";
import { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
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

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const indexOfLastNFT = currentPage * itemsPerPage;
  const indexOfFirstNFT = indexOfLastNFT - itemsPerPage;
  const currentNFTs = ownedNFTs?.slice(indexOfFirstNFT, indexOfLastNFT);

  const totalPages = Math.ceil((ownedNFTs?.length || 0) / itemsPerPage);

  const renderPaginationItems = () => {
    const pages = [];
    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <Pagination.Item
            key={i}
            active={i === currentPage}
            onClick={() => setCurrentPage(i)}
          >
            {i}
          </Pagination.Item>
        );
      }
    } else {
      if (currentPage === 1) {
        pages.push(
          <>
            <Pagination.Item
              key={1}
              active={1 === currentPage}
              onClick={() => setCurrentPage(1)}
            >
              {1}
            </Pagination.Item>
            <Pagination.Item
              key={2}
              active={2 === (currentPage as any)}
              onClick={() => setCurrentPage(2)}
            >
              {2}
            </Pagination.Item>
            <Pagination.Item
              key={3}
              active={3 === (currentPage as any)}
              onClick={() => setCurrentPage(3)}
            >
              {3}
            </Pagination.Item>
          </>
        );
      } else if (currentPage === totalPages) {
        pages.push(
          <>
            <Pagination.Item
              key={totalPages - 2}
              active={totalPages - 2 === (currentPage as any)}
              onClick={() => setCurrentPage(totalPages - 2)}
            >
              {totalPages - 2}
            </Pagination.Item>
            <Pagination.Item
              key={totalPages - 1}
              active={totalPages - 1 === (currentPage as any)}
              onClick={() => setCurrentPage(totalPages - 1)}
            >
              {totalPages - 1}
            </Pagination.Item>
            <Pagination.Item
              key={totalPages}
              active={totalPages === (currentPage as any)}
              onClick={() => setCurrentPage(totalPages)}
            >
              {totalPages}
            </Pagination.Item>
          </>
        );
      } else {
        pages.push(
          <>
            <Pagination.Item
              key={currentPage - 1}
              active={currentPage - 1 === (currentPage as any)}
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              {currentPage - 1}
            </Pagination.Item>
            <Pagination.Item
              key={currentPage}
              active={currentPage === (currentPage as any)}
              onClick={() => setCurrentPage(currentPage)}
            >
              {currentPage}
            </Pagination.Item>
            <Pagination.Item
              key={currentPage + 1}
              active={currentPage + 1 === (currentPage as any)}
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              {currentPage + 1}
            </Pagination.Item>
          </>
        );
      }
    }
    return pages;
  };

  return (
    <section className="mybird-section bg-dark d-flex align-items-center">
      <div className="container mt-5">
        {address ? (
          <>
            <h2 className="text-center text-white-50 mb-4">
              My XBirds in wallet{" "}
              <span className="text-primary">
                {shortAddress(address) || ""}
              </span>
            </h2>

            <div className="pt-4">
              <div className="row">
                {!isOwnedNFTsLoading ? (
                  ownedNFTs?.length! > 0 ? (
                    currentNFTs?.map((nft) => (
                      <div
                        key={nft.metadata.id}
                        className="col-6 col-lg-3 mb-4 mb-lg-0"
                      >
                        <div className="d-flex justify-content-center align-items-center">
                          <ThirdwebNftMedia
                            metadata={nft.metadata}
                            width="171px"
                            height="auto"
                            className="rounded mb-2"
                          />
                        </div>
                        <div className="text-center mb-4">
                          <div>
                            {
                              <h5 className="fw-lighter">
                                {nft.metadata.name}
                              </h5>
                            }
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center">
                      <p>No NFTs found. Get one now.</p>
                    </div>
                  )
                ) : (
                  <div className="text-center">
                    <p>Loading...</p>
                  </div>
                )}
              </div>
            </div>
          </>
        ) : (
          <div className="text-center">
            <h1>Please Connect Your Wallet.</h1>
          </div>
        )}

        {ownedNFTs?.length! > 0 && (
          <div className="d-flex justify-content-center mt-5">
            <Pagination>
              <Pagination.Prev
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              />
              {renderPaginationItems()}
              <Pagination.Next
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
              />
            </Pagination>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBirdComponent;
