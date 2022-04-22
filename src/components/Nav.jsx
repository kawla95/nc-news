import { Link } from "react-router-dom";

const Nav = ({ setTopic, setSort_by, setOrder }) => {
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
      <Link to="/">
        <button onClick={() => setSort_by("comment_count")}>
          Comment count
        </button>
      </Link>
      <Link to="/">
        <button onClick={() => setSort_by("created_at")}>Date</button>
      </Link>
      <Link to="/">
        <button onClick={() => setSort_by("votes")}>Votes</button>
      </Link>
      <Link to="/">
        <button onClick={() => setOrder("ASC")}>
          Order Articles Ascending
        </button>
      </Link>
      <Link to="/">
        <button onClick={() => setOrder("DESC")}>
          Order Articles Descending
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
