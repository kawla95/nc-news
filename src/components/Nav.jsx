import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [setTopic, topic] = useState("");
  return (
    <nav>
      <Link to="/">
        <button onClick={() => setTopic("")}>All Topics</button>
      </Link>
      <Link to="/coding">
        <button onClick={() => setTopic("coding")}>Coding</button>
      </Link>
      <Link to="/football">
        <button onClick={() => setTopic("football")}>Football</button>
      </Link>
      <Link to="/cooking">
        <button onClick={() => setTopic("cooking")}>Cooking</button>
      </Link>
    </nav>
  );
};

export default Nav;
