import React from "react";

function PostComments({ comments }) {
  return (
    <div>
      {/* Percorrendo comentarios de cada post */}
      {comments.map(comment => (
        <div key={comment.id} className="comment">
          <img
            src={comment.author.avatar + comment.author.name + ".png"}
            alt=""
          />
          <div className="comment-content"><strong>{comment.author.name}</strong><span>{comment.content}</span></div>
        </div>
      ))}
    </div>
  );
}

function PostInfo({ author, date }) {
  return (
    <div className="post-info">
      <img className="avatar" src={author.avatar + author.name + ".png"} alt="" />
      <div className="details">
        <strong>{author.name} </strong><span>{date}</span>
      </div>
    </div>
  );
}

function PostItem({ author, date, content, comments, img }) {
  return (
    <div className="post">
      <PostInfo author={author} date={date} />      
      <div className="post-content">{content}</div>
      <img src={img} alt="" />
      <PostComments key={comments.id} comments={comments} />
    </div>
  );
}

export default PostItem;
