import React from 'react';
import { isPropertySignature } from 'typescript';
import PostCard from './components/PostCard';
import PostsList from "./components/PostsList";
import Confirmation from "./pages/Confirmation";
import Login from "./pages/Login";

function App() {
  const MOCK_DATA = [
    {
      id: 1,
      image: "",
      text: "string",
      date: "21.04.2022",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: 2,
      image: "",
      text: "string",
      date: "22.04.2022",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: 3,
      image: "",
      text: "string",
      date: "23.04.2022",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
    {
      id: 4,
      image: "",
      text: "string",
      date: "24.04.2022",
      lesson_num: 0,
      title: "What is Lorem ipsum?",
      author: 0,
    },
  ];

  return <PostsList data={MOCK_DATA} />;
}

export default App;