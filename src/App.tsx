import "./App.css";
import "./init"; //for fixing the reference.global
// import WhitelistTopbarComponent from "./components/WhitelistTopbarComponent";
import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";
import PriceComponent from "./components/PriceComponent";
import StoryComponent from "./components/StoryComponent";
import IntroComponent from "./components/IntroComponent";
import BasicFormsOfBirdsComponent from "./components/BasicFormsOfBirdsComponent";
import TimelineComponent from "./components/TimelineComponent";
import FaqComponent from "./components/FaqComponent";
import TeamComponent from "./components/TeamComponent";
import JoinComponent from "./components/JoinComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <main>
      <NavComponent />
      <MainComponent />
      <IntroComponent />
      <PriceComponent />
      <StoryComponent />
      <BasicFormsOfBirdsComponent />
      <TimelineComponent />
      <FaqComponent />
      <TeamComponent />
      <JoinComponent />
      <FooterComponent />
    </main>
  );
}

export default App;
