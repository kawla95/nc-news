import { deleteComment } from "../utils/api-endpoints";

function DeleteComment({ comment_id }) {
  const handleDelete = () => {
    deleteComment(comment_id).then((res) => res);
  };
  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteComment;
