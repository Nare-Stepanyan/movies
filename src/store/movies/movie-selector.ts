import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "..";

const movieSelector = (state: RootState) => state.movie;

export const moviesSelector = createSelector(
  movieSelector,
  (app) => app.movies
);
