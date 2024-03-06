import "./WhitelistTopbarComponent.css";

const WhitelistTopbarComponent: React.FC = () => {
  return (
    <div className="whitelist-section">
      <div className="alert alert-info alert-whitelist" role="alert">
        <button type="button" className="close" data-dismiss="alert">
          ×
        </button>
        <strong>This</strong> is a info alert—check it out!
      </div>
    </div>
  );
};

export default WhitelistTopbarComponent;
