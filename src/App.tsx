import "./App.css";
import NavComponent from "./components/NavComponent";
import MainComponent from "./components/MainComponent";
import StoryComponent from "./components/StoryComponent";
import IntroComponent from "./components/IntroComponent";
import WeaponComponent from "./components/WeaponComponent";
import FaqComponent from "./components/FaqComponent";
import TeamComponent from "./components/TeamComponent";
import JoinComponent from "./components/JoinComponent";
import FooterComponent from "./components/FooterComponent";

function App() {
  return (
    <main>
      <NavComponent />
      <MainComponent />
      <StoryComponent />
      <IntroComponent />
      <WeaponComponent />
      <FaqComponent />
      <TeamComponent />
      <JoinComponent />
      <FooterComponent />
    </main>
  );
}

export default App;
