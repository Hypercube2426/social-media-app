import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getComments, likeComment, dislikeComment } from "./actions";
import Loading from "components/Loading";
import InfiniteScroll from "react-infinite-scroll-component";
import CommentCard from "components/CommentCard";
import { selectComments, selectCommentByPostId } from "./selector";
import Create from "./Create";

function Comment({ postId }) {
  const dispatch = useDispatch();
  const comment = useSelector((state) => selectComments(state));
  const data = useSelector((state) => selectCommentByPostId(state, postId));

  useEffect(() => {
    if (comment.data.length === 0) {
      dispatch(getComments(postId));
    } else if (comment.data.length === 1) {
      window.location.reload();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <>
      <Create postId={postId} />
      {comment.loading ? (
        <Loading />
      ) : data.length > 0 ? (
        <InfiniteScroll
          dataLength={comment.data.length} //This is important field to render the next data
          next={getComments}
          hasMore={comment.hasNext}
          loader={<Loading />}
        >
          {data.map((comment) => (
            <div key={comment.id}>
              <CommentCard
                comment={comment}
                likeAction={(id) => dispatch(likeComment(id))}
                dislikeAction={(id) => dispatch(dislikeComment(id))}
              />
            </div>
          ))}
        </InfiniteScroll>
      ) : (
        <p className="text-center">
          Bu gönderiye henüz yorum yapılmamış. İlk yorumu sen yap!
        </p>
      )}
    </>
  );
}

export default Comment;

/*



*/
