import "./App.css";
import "./init"; //for fixing the reference.global
import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";
//import MyBirdComponent from "./components/MyBirdComponent";
import IntroComponent from "./components/IntroComponent";
import FeatureComponent from "./components/FeatureComponent";
import StoryComponent from "./components/StoryComponent";
import EvolutionComponent from "./components/EvolutionComponent";
import TimelineComponent from "./components/TimelineComponent";
import TeamComponent from "./components/TeamComponent";
import JoinComponent from "./components/JoinComponent";
import FooterComponent from "./components/FooterComponent";
import WhitelistModalComponent from "./components/WhitelistModalComponent";

function App() {
  return (
    <main>
      <NavComponent />
      <MainComponent />
      <IntroComponent />
      <FeatureComponent />
      <StoryComponent />
      <EvolutionComponent />
      <TimelineComponent />
      <TeamComponent />
      <JoinComponent />
      <FooterComponent />
      <WhitelistModalComponent />
    </main>
  );
}

export default App;
