import "./JoinComponent.css";

const JoinComponent: React.FC = () => {
  return (
    <section className="join-section " id="join-section">
      <div className="container text-center">
        <h2 className="text-white mb-5">Join our Forest</h2>
        <a
          href="https://discord.com/channels/1037228976852185108/1037228977292574731"
          className="join-icon"
          target="_blank"
        >
          <i className="fa-brands fa-discord fa-4x"></i>
        </a>
      </div>
    </section>
  );
};

export default JoinComponent;
