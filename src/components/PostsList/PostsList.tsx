import React, { FC } from "react";
import "./PostsList.css";
import PostCard from "../PostCard";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/ThemeModeContext'

type PostsProps = {
  data: Card[]
}

type Card = {
id: string
image: string
title: string
text: string
date: string
}
const Posts: FC<PostsProps> = () => {
  const { theme, onChangeTheme = () =>{}} = useThemeContext()
  const isLightTheme = theme === Theme.Light;
  
    const MOCK_DATA = [
    {
      id: 1,
      image: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2022-01-02",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: 2,
      image: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2022-02-03",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: 3,
      image: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2022-03-04",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: 4,
      image: "",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "2021-04-05",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
  ];


  const cards = MOCK_DATA.map((item:any) => {
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