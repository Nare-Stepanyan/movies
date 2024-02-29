import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { moviesSelector } from "../../store/movies/movie-selector";
import SingleMovie from "../single-movie";
import { getMovies } from "../../store/movies/actions";

const Movies = () => {
  const movies = useAppSelector(moviesSelector);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  return (
    <>
      <div className="movies-container">
        {movies?.map((movie) => (
          <SingleMovie movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default Movies;
