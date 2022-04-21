import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api-endpoints";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [topic, setTopic] = useState("");

  useEffect(() => {
    getArticles(topic).then((res) => {
      setArticles(res);
      console.log(res);
    });
  }, [topic]);

  return (
    <main>
      <button onClick={() => setTopic("")}>All Topics</button>
      <button onClick={() => setTopic("coding")}>Coding</button>
      <button onClick={() => setTopic("football")}>Football</button>
      <button onClick={() => setTopic("cooking")}>Cooking</button>
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
