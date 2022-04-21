import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api-endpoints";

const Topics = ({ setChosenTopic, chosenTopic }) => {
  const [topicArticles, setTopicArticles] = useState("");

  setChosenTopic(user_topic);

  useEffect(() => {
    getArticles(chosenTopic).then((res) => {
      console.log(res);
      setTopicArticles(res);
    });
  }, [chosenTopic]);
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
