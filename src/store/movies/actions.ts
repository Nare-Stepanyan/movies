import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Movie } from "../../type";

export const getMovies = createAsyncThunk(
  "movie/getMovies",
  async (_, { rejectedWithValue }: any) => {
    try {
      const url = "http://localhost:8080/movies";
      const { data } = await axios(url);
      return data;
    } catch (_e) {
      rejectedWithValue("Error");
    }
  }
);

export const addMovie = createAsyncThunk(
  "movie/addMovie",
  async (movie: Movie, { rejectWithValue }) => {
    try {
      const url = `http://localhost:8080/movies`;
      const options = {
        method: "POST",
        data: movie,
        headers: {
          "Content-Type": "application/json",
        },
      };
      const { data } = await axios(url, options);
      return data;
    } catch (error) {
      return rejectWithValue("error");
    }
  }
);
