import { useState } from "react";
import { patchArticleVotes } from "../utils/api-endpoints";

const Votes = ({ article_id }) => {
  const [vote, setVote] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const clickHandler = () => {
    try {
      const increment = isLiked ? -1 : 1;
      setVote(vote + increment);
      setIsLiked(!isLiked);
      patchArticleVotes(article_id, {
        inc_votes: increment,
      });
    } catch (err) {}
  };

  return (
    <div>
      <button onClick={clickHandler}>{isLiked ? "Unvote" : "Vote"}</button>
      <p>{vote}</p>
    </div>
  );
};

export default Votes;
