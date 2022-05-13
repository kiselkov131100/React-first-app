import React, { useState } from "react";
import "./App.css";
import Confirmation from "./pages/Confirmation";
import PostsList from "./components/PostsList";
import CardPosts from "./pages/CardPosts";
import ContentTitle from "./pages/ContentTitle";
import Authorization from "./pages/Authorization";
import Template from './pages/Template'
import HeaderPages from "./components/HeaderPages";
import { ThemeModeProvider } from "./context/ThemeModeProvider";
import { Theme } from "./context/ThemeModeContext";

function App() {
  const [theme, setTheme] = useState(Theme.Light);
  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };

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

  return (
 <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
   <div className="App">
   <CardPosts data={MOCK_DATA} />
  {/* <Authorization />     */}
  </div>
  </ThemeModeProvider>
    );
  };

export default App;