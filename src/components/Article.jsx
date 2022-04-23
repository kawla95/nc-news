import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById } from "../utils/api-endpoints";
import { Link } from "react-router-dom";
import moment from "moment";

const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");

  useEffect(() => {
    getArticleById(articleId).then((res) => {
      console.log(res);
      setArticle(res);
    });
  }, [articleId]);
  return (
    <div>
      <Link to="/">
        <button>Homepage</button>
      </Link>
      <ul>
        <li key={article.article_id}>
          <h3> By: {article.author}</h3>
          <p>On: {moment(article.created_at).format("MMM Do YY")} </p>
          <p>Topic: {article.topic}</p>
          <p>{article.body}</p>
          <p> votes: {article.votes} </p>
          <p> Comments: {article.comment_count} </p>
        </li>
      </ul>
    </div>
  );
};

export default Article;
