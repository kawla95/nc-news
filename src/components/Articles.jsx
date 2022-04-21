import { useState, useEffect } from "react";
import { getArticles } from "../utils/api-endpoints";
import { useParams } from "react-router-dom";
import Nav from "./Nav";
import moment from "moment";

const Articles = () => {
  const { user_topic } = useParams();
  console.log(user_topic);
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");
  const [sort_by, setSort_by] = useState("");
  const [order, setOrder] = useState("");

  useEffect(() => {
    getArticles(topic, sort_by, order).then((res) => {
      setArticles(res);
    });
  }, [topic, sort_by, order]);

  return (
    <div>
      <Nav setTopic={setTopic} />

      <label htmlFor="sort_by">Sort By: </label>
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
                <p>
                  Created at: {moment(article.created_at).format("MMM Do YYYY")}
                </p>
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
