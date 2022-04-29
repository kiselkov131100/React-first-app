import React, { FC } from "react";
import "./PostsList.css";
import PostCard from "../PostCard";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/ThemeModeContext'

const Posts = (props:any) => {
  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;

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

  return <div 
    className={classnames('postsContainer', {['darkContainer']: !isLightTheme})}>
  {cards}</div>;
};

export default Posts;