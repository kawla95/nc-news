import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api-endpoints";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topic] = useState("");

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, [topic]);

  return (
    <main>
      <ul>
        {articles.map((article) => {
          return (
            <>
              <li key={article.article_id}>
                <h3>{article.title}</h3>
                <h4>Topic: {article.topic}</h4>
                <h5>Author: {article.author}</h5>
                <p>{article.body}</p>
                <p>Votes: {article.votes}</p>
                <p>Created at: {article.created_at}</p>
                <p>Comments: {article.comment_count}</p>
              </li>
            </>
          );
        })}
      </ul>
    </main>
  );
};

export default Articles;
