import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import HeaderPages from "../../components/HeaderPages";
import CardPosts from "../CardPosts";
import Information from "../Information";

const Router = () => {
  const isLoggedIn = true;
  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <Routes>
          <Route path={"/"} element={<HeaderPages />}>
            <Route path={"cards-list"} element={<CardPosts />} />
            <Route path={"info"} element={<Information />} />
          </Route>
        </Routes>
      ) : (
        <Routes></Routes>
      )}
    </BrowserRouter>
  );
};

export default Router;