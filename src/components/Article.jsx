import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getArticleById, getArticleComments } from "../utils/api-endpoints";
import { Link } from "react-router-dom";
import moment from "moment";
import PostComment from "./PostComment";
import DeleteComment from "./DeleteComment";

const Article = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState("");
  const [comments, setComments] = useState([]);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    getArticleById(articleId).then((res) => {
      setArticle(res);
    });
    getArticleComments(articleId).then((res) => {
      setComments(res);
    });
  }, [articleId]);
  return (
    <div>
      <Link to="/">
        <button>Homepage</button>
      </Link>
      <h1>{article.title}</h1>
      <ul>
        <li key={article.article_id}>
          <h3> By: {article.author}</h3>
          <p>On: {moment(article.created_at).format("MMM Do YY")} </p>
          <p>Topic: {article.topic}</p>
          <p>{article.body}</p>
        </li>
        <PostComment articleId={articleId} setComments={setComments} />
        <button
          onClick={() =>
            showComments ? setShowComments(false) : setShowComments(true)
          }
        >
          Show Comments
        </button>

        {showComments ? (
          comments.map((comment) => {
            return (
              <>
                <li key={comment.comment_id}>
                  <p>By: {comment.author}</p>
                  <p>On: {moment(comment.created_at).format("MMM Do YYYY")} </p>
                  <p> comment: {comment.body}</p>
                </li>
                {comment.author === "jessjelly" ? (
                  <DeleteComment comment_id={comment.comment_id} />
                ) : (
                  <></>
                )}
              </>
            );
          })
        ) : (
          <p></p>
        )}
      </ul>
    </div>
  );
};

export default Article;
