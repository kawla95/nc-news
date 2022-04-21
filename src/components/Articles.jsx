import { useState, useEffect } from "react";
import { getArticles } from "../utils/api-endpoints";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [sort_by, setSort_by] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    getArticles(order, sort_by).then((res) => {
      setArticles(res);
    });
  }, [sort_by, order]);

  return (
    <div>
      <label htmlFor="sort_by">Sort By</label>
      <select name="sort_by" id="sort_by">
        <option
          value="comment_count"
          onClick={() => setSort_by("comment_count")}
        >
          Comment Count
        </option>
        <option value="created_at" onClick={() => setSort_by("created_at")}>
          Date
        </option>
        <option value="votes" onClick={() => setSort_by("votes")}>
          Votes
        </option>
      </select>
      <button onClick={() => setOrder("ASC")}>Latest</button>
      <button onClick={() => setOrder("DESC")}>Oldest</button>
      <ul>
        {articles.map((article) => {
          return (
            <>
              <li key={article.article_id}>
                <h3>{article.title}</h3>
                <p>{article.topic}</p>
                <h4>{article.author}</h4>
                <p>{article.body}</p>
                <p>Votes: {article.votes}</p>
                <p>Created at: {article.created_at}</p>
                <p>Comments: {article.comment_count}</p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
