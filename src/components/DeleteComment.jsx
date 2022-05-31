import { useState } from "react";
import { deleteComment } from "../utils/api-endpoints";
import { Modal, Button } from "react-bootstrap";

const DeleteComment = ({ comment_id }) => {
  const [commentDeleted, setCommentDeleted] = useState(false);
  const handlePopupClose = () => setCommentDeleted(false);
  const handleDelete = (e) => {
    e.preventDefault();
    deleteComment(comment_id).then(() => {
      setCommentDeleted(true);
    });
  };
  return (
    <div>
      <Modal show={commentDeleted} onHide={handlePopupClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Your comment was deleted! please refresh page.
          </Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="primary" onClick={handlePopupClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <form onSubmit={handleDelete}>
        <button>Delete</button>
      </form>
    </div>
  );
};

export default DeleteComment;
