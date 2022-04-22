import React from "react";
import "./CardPosts.css";
import PostsList from "../../components/PostsList";
import Button from "../../components/Button";

const MyPosts = (props: any) => {
  return (
    <div className="cardPosts">
      <div className="headerPosts">
     <div>
        <span className="headerItem">Username</span>
     </div>
   
     
    </div>
      <div className="titleContainer">
      <h1 className="headerTitle">My posts</h1> <Button className={'btnAny'} btnContent={'+Add'}/>

      </div>
      <PostsList data={props.data} />
    </div>

  );
};

export default MyPosts;