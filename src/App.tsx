import "./App.css";
import "./init"; //for fixing the reference.global
// import WhitelistTopbarComponent from "./components/WhitelistTopbarComponent";
import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";
import IntroComponent from "./components/IntroComponent";
import FeatureComponent from "./components/FeatureComponent";
import StoryComponent from "./components/StoryComponent";
import FormationComponent from "./components/FormationComponent";
import TimelineComponent from "./components/TimelineComponent";
import TeamComponent from "./components/TeamComponent";
import JoinComponent from "./components/JoinComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <main>
      <NavComponent />
      <MainComponent />
      <IntroComponent />
      <FeatureComponent />
      <StoryComponent />
      <FormationComponent />
      <TimelineComponent />
      <TeamComponent />
      <JoinComponent />
      <FooterComponent />
    </main>
  );
}

export default App;
