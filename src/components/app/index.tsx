import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "../not-found";
import Header from "../header";
import Admin from "../admin";
import Movies from "../movies";
import MoviePlayer from "../movie-player";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Movies />}></Route>
          <Route path="/admin" element={<Admin />}></Route>
          <Route path="/movie" element={<MoviePlayer />}></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
