import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Topics from "./components/Topics";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Articles />} Route />
          <Route path="/topics" element={<Topics />} Route />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
