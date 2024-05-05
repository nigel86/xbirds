import MainComponent from "../components/MainComponent";
import IntroComponent from "../components/IntroComponent";
import FeatureComponent from "../components/FeatureComponent";
import StoryComponent from "../components/StoryComponent";
import EvolutionComponent from "../components/EvolutionComponent";
// import TimelineComponent from "../components/TimelineComponent";
import TeamComponent from "../components/TeamComponent";
import JoinComponent from "../components/JoinComponent";
// import WhitelistModalComponent from "../components/WhitelistModalComponent";

const HomePage: React.FC = () => {
  return (
    <>
      <MainComponent />
      <IntroComponent />
      <FeatureComponent />
      <StoryComponent />
      <EvolutionComponent />
      {/* <TimelineComponent /> */}
      <TeamComponent />
      <JoinComponent />
      {/* <WhitelistModalComponent /> */}
    </>
  );
};

export default HomePage;
