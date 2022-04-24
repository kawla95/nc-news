import { useState } from "react";
import { postNewComment } from "../utils/api-endpoints";
import { Modal, Button } from "react-bootstrap";

const PostComment = ({ articleId }) => {
  const [newComment, setNewComment] = useState("");
  const [commentPosted, setCommentPosted] = useState(false);

  const handlePopupClose = () => setCommentPosted(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCommentPosted(true);
    let comment = { username: "jessjelly", body: newComment };
    postNewComment(articleId, comment);
    setNewComment("");
  };

  return (
    <>
      <Modal show={commentPosted} onHide={handlePopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your comment was posted!</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handlePopupClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <form onSubmit={handleSubmit}>
        <textarea
          value={newComment}
          onChange={(e) => {
            setNewComment(e.target.value);
          }}
        ></textarea>
        <button> Post Comment </button>
      </form>
    </>
  );
};

export default PostComment;
