import { useState } from "react";
import Whitelist from "./Whitelist";
import "./WhiteListComponent.css";

const WhiteListComponent: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [result, setResult] = useState<string | null>(null);

  const handleSearch = () => {
    const found = Whitelist.includes(searchTerm);
    setResult(
      found
        ? "Congratulation! You are on our whitelist."
        : "Sorry, Please join us during public mint."
    );
  };

  const renderInputGroup = () => (
    <>
      <input
        type="text"
        id="walletAddress"
        className="form-control"
        placeholder="0x"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleSearch}>
        Check
      </button>
    </>
  );

  return (
    <div className="row">
      <div className="col">
        <h5 className="my-5 d-none d-md-block">Whitelist Address Verifier</h5>
        <h6 className="my-3 d-block d-md-none">Whitelist Address Verifier</h6>
        <div className="d-none d-md-block">
          <div className="mb-3 check-whitelist input-group">
            {renderInputGroup()}
          </div>
        </div>

        <div className="d-block d-md-none">
          <div className="mb-3 check-whitelist input-group input-group-sm">
            {renderInputGroup()}
          </div>
        </div>

        <h6 className="mt-3"> {result}</h6>
      </div>
    </div>
  );
};

export default WhiteListComponent;
