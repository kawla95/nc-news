import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Topics from "./components/Topics";
import Nav from "../src/components/Nav";
import { useState } from "react";

function App() {
  const [setTopic] = useState("");
  return (
    <BrowserRouter>
      <Nav setTopic={setTopic}></Nav>
      <div className="App">
        <Routes>
          <Route path="/" element={<Articles />} Route />
          <Route path="/:user_topic" element={<Topics />} Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
