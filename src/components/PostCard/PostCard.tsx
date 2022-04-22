import React from "react";
import "./PostCard.css";

const PostCard = (props: any) => {
  const imgPost = "";
  return (
    <div className="postsCard" key={props.id}>
      <div className="postsContent">
        <img
          src={props.image ? props.image : imgPost}
          alt={props.title}
          className="postsImg"
        />
        <h2>{props.title}</h2>
        <p className="postsText">{props.text}</p>
      </div>
      <span className="postsDate">{props.date}</span>
    </div>
  );
};

export default PostCard;