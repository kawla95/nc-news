import { Link } from "react-router-dom";

const Nav = ({ setTopic, setSort_by, setOrder }) => {
  return (
    <nav className="NavBar">
      <Link to="/">
        <button onClick={() => setTopic("")} className="HomeButton">
          Homepage
        </button>
      </Link>
      Topics:
      <Link to="/coding">
        <button onClick={() => setTopic("coding")} className="HomeButton">
          Coding
        </button>
      </Link>
      <Link to="/football">
        <button onClick={() => setTopic("football")} className="HomeButton">
          Football
        </button>
      </Link>
      <Link to="/cooking">
        <button onClick={() => setTopic("cooking")} className="HomeButton">
          Cooking
        </button>
      </Link>
      Sort by:
      <Link to="/">
        <button
          onClick={() => setSort_by("comment_count")}
          className="HomeButton"
        >
          Comments
        </button>
      </Link>
      <Link to="/">
        <button onClick={() => setSort_by("created_at")} className="HomeButton">
          Date
        </button>
      </Link>
      <Link to="/">
        <button onClick={() => setSort_by("votes")} className="HomeButton">
          Votes
        </button>
      </Link>
      Order:
      <Link to="/">
        <button onClick={() => setOrder("ASC")} className="HomeButton">
          Ascending
        </button>
      </Link>
      <Link to="/">
        <button onClick={() => setOrder("DESC")} className="HomeButton">
          Descending
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
