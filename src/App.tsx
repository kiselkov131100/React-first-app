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
import Router from "./pages/Router";

function App() {
  const [theme, setTheme] = useState(Theme.Light);

  const onChangeTheme = (value: Theme) => {
    setTheme(value);
  };

  return (
    <ThemeModeProvider theme={theme} onChangeTheme={onChangeTheme}>
      <div className="App">
        <Router />
      </div>
    </ThemeModeProvider>
  );
}

export default App;