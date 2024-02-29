import { createSlice } from "@reduxjs/toolkit";
import { Movie } from "../../type";
import { getMovies, addMovie } from "./actions";

type MovieState = {
  movies: Movie[];
  isLoading: boolean;
};

const initialState: MovieState = {
  movies: [],
  isLoading: false,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getMovies.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      state.movies = action.payload;
    });
    builder.addCase(getMovies.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addMovie.fulfilled, (state, action) => {
      state.movies = [...state.movies, action.payload];
    });
  },
});

export const { setMovies } = movieSlice.actions;

export default movieSlice.reducer;
