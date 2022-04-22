import React, { FC } from "react";
import "./PostsList.css";
import PostCard from "../PostCard";

const Posts = (props:any) => {
  const cards = props.data.map((item:any) => {
    return (
      <PostCard
        key={item.id}
        image={item.image}
        title={item.title}
        text={item.text}
        date={item.date}
      />
    );
  });

  return <div className="postsContainer">{cards}</div>;
};
export default Posts;