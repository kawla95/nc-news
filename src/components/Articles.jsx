import { useState, useEffect } from "react";
import { getArticles } from "../utils/api-endpoints";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import moment from "moment";

const Articles = () => {
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
      <Nav setTopic={setTopic} setOrder={setOrder} setSort_by={setSort_by} />
      <h1 className="Title">News and Views</h1>
      <ul>
        {articles.map((article) => {
          return (
            <>
              <li key={article.article_id}>
                <h3>
                  <Link to={`/articles/${article.article_id}`}>
                    {article.title}
                  </Link>
                </h3>
                <h4 className="Topic"> Topic: {article.topic}</h4>
                <h5 className="Author"> By: {article.author}</h5>
                <h6>On {moment(article.created_at).format("Do MMM YYYY")}</h6>
                <h7>Comments: {article.comment_count}</h7>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Articles;
