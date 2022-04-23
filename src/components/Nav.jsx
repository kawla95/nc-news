import { Link } from "react-router-dom";

const Nav = ({ setTopic, setSort_by, setOrder }) => {
  return (
    <nav>
      <Link to="/">
        <button onClick={() => setTopic("")}>Homepage</button>
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
      <br />
      Sort by:
      <Link to="/">
        <button onClick={() => setSort_by("comment_count")}>Comments</button>
      </Link>
      <Link to="/">
        <button onClick={() => setSort_by("created_at")}>Date</button>
      </Link>
      <Link to="/">
        <button onClick={() => setSort_by("votes")}>Votes</button>
      </Link>
      <br />
      Order:
      <Link to="/">
        <button onClick={() => setOrder("ASC")}>Ascending</button>
      </Link>
      <Link to="/">
        <button onClick={() => setOrder("DESC")}>Descending</button>
      </Link>
    </nav>
  );
};

export default Nav;
