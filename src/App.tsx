import "./App.css";
import "./init"; //for fixing the reference.global

import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyBirdsPage from "./pages/MyBirdsPage";
import FooterComponent from "./components/FooterComponent";
// import TestPage from "./pages/TestPage";
import NoPage from "./pages/NoPage";
import NavComponent from "./components/NavComponent";

function App() {
  return (
    <main>
      <NavComponent />
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/mybirds" element={<MyBirdsPage />} />
          {/* <Route path="/testmintbymetaodys" element={<TestPage />} /> */}
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
      <FooterComponent />
    </main>
  );
}

export default App;
