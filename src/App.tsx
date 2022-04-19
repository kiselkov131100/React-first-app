import React from 'react';
import { isPropertySignature } from 'typescript';
import './App.css';
import Input from './components/Input'
import Confirmation from "./pages/Confirmation";
import Login from "./pages/Login";

function App() {
  const MOCK_DATA = [
    {
      id: 1,
      image: "https://tinypng.com/images/social/website.jpg",
      text: "",
      date: "",
      lesson_num: 0,
      title: "",
      author: 0,
    },
    {
      id: 2,
      image: "https://tinypng.com/images/social/website.jpg",
      text: "",
      date: "",
      lesson_num: 0,
      title: "",
      author: 0,
    },
    {
      id: 3,
      image: "",
      text: "",
      date: "",
      lesson_num: 0,
      title: "",
      author: 0,
    },
    {
      id: 4,
      image: "https://tinypng.com/images/social/website.jpg",
      text: "",
      date: "",
      lesson_num: 0,
      title: "",
      author: 0,
    },
  ];
  return <Posts data={MOCK_DATA} />;
}

export default App;