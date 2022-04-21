import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Nav from "../src/components/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:user_topic" element={<Topics />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
