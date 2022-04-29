import React from "react";
import "./CardPosts.css";
import PostsList from "../../components/PostsList";
import HeaderPages from "../../components/HeaderPages";
import Button from "../../components/Button";
import classnames from "classnames";
import {Theme, useThemeContext} from './../../context/ThemeModeContext'

const CardPosts = (props: any) => {
  const { theme, onChangeTheme = () => {} } = useThemeContext()
  const isLightTheme = theme === Theme.Light;

  return (
    <div className={classnames('CardPosts',{['container']: isLightTheme}, {['darkContainer']: !isLightTheme})}>
      <HeaderPages />
      <div className="titleContainer">
      <h1 className="headerTitle">My posts</h1> 
      <Button className={'btnAny'} btnContent={'+Add'} onClick={() =>{}}/>
      </div>
      <PostsList data={props.data} />
    </div>
  );
};

export default CardPosts;