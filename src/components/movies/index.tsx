import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { moviesSelector } from "../../store/movies/movie-selector";
import SingleMovie from "../single-movie";
import { getMovies } from "../../store/movies/actions";
import MovieFilters from "../movie-filters";
import { Filters, Movie } from "../../type";
import { applyFilters } from "../helpers";

const Movies = () => {
  const movies = useAppSelector(moviesSelector);
  const dispatch = useAppDispatch();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([...movies]);

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const filterMovies = (filters: Filters) => {
    const filtered = applyFilters(movies, filters);
    setFilteredMovies(filtered);
  };
  return (
    <>
      <div>
        <MovieFilters onFilterChange={filterMovies} />
      </div>
      <div className="movies-container">
        {filteredMovies?.map((movie) => (
          <SingleMovie movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  );
};

export default Movies;
