import React from "react";
import { useState, useEffect } from "react";
import { getTopics } from "../utils/api-endpoints";

const Topics = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);
  return (
    <div>
      <ul>
        {topics.map((topic) => {
          return (
            <div>
              <li key={topic.topic_id}>
                <h2>{topic.slug}</h2>
                <p>{topic.description}</p>
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Topics;
