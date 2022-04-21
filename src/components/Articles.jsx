import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api-endpoints";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((res) => {
      setArticles(res);
    });
  }, []);

  return (
    <div>
      <ul>
        {articles.map((article) => {
          return (
            <>
              <li key={article.article_id}>
                <h3>{article.title}</h3>
                <h4>{article.author}</h4>
                <p>{article.body}</p>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
