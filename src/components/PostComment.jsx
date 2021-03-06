import { useState } from "react";
import { postNewComment } from "../utils/api-endpoints";
import { Modal, Button } from "react-bootstrap";

const PostComment = ({ articleId, setComments }) => {
  const [newComment, setNewComment] = useState("");
  const [commentPosted, setCommentPosted] = useState(false);
  const [blankComment, setBlankComment] = useState(false);

  const handlePopupClose = () => setCommentPosted(false);
  const handleBlankCommentClose = () => setBlankComment(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newComment.length > 0) {
      setCommentPosted(true);
      let reqBody = { username: "jessjelly", body: newComment };

      postNewComment(articleId, reqBody).then((res) => {
        setComments((currComments) => {
          return [res.data.comment, ...currComments];
        });
      });
      setNewComment("");
    } else {
      setBlankComment(true);
    }
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
      <Modal show={blankComment} onHide={handleBlankCommentClose}>
        <Modal.Header closeButton>
          <Modal.Title>You cannot post an empty comment</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handleBlankCommentClose}>
            OK
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
        <button className="PostComment"> Post Comment </button>
      </form>
    </>
  );
};

export default PostComment;
