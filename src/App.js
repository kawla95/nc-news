import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Articles from "./components/Articles";
import Article from "./components/Article";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Articles />} />
          <Route path="/:user_topic" element={<Articles />} />
          <Route path="/articles/:articleId" element={<Article />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
