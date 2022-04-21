import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../utils/api-endpoints";

const Topics = () => {
  const [topicArticles, setTopicArticles] = useState([]);

  const { user_topic } = useParams();

  useEffect(() => {
    getArticles(user_topic).then((res) => {
      setTopicArticles(res);
    });
  }, [user_topic]);
  return (
    <div>
      <ul>
        {topicArticles.map((article) => {
          return (
            <li key={article.article_id}>
              <h3>{article.title}</h3>
              <h4>Topic: {article.topic}</h4>
              <h5>Author: {article.author}</h5>
              <p>{article.body}</p>
              <p>Votes: {article.votes}</p>
              <p>Created at: {article.created_at}</p>
              <p>Comments: {article.comment_count}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
