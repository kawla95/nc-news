import React from "react";
import { getArticleById } from "../utils/api-endpoints";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import moment from "moment";

const Article = () => {
  const { article_id } = useParams();
  const [topic, setTopic] = useState("");
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);
  return (
    <div>
      <Link to="/">
        <button onClick={() => setTopic("")}>Back to all articles</button>
      </Link>
      <ul>
        <li key={article.article_id}>
          <h3> By: {article.author}</h3>
          <p>On: {moment(article.created_at).format("MMM Do YY")} </p>
          <p>Topic: {article.topic}</p>
          <p>{article.body}</p>
          <p> votes: {article.votes} </p>
          <p>Comments: {article.comment_count}</p>
        </li>
      </ul>
    </div>
  );
};

export default Article;
