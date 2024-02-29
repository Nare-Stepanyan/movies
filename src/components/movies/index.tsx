import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hook";
import { moviesSelector } from "../../store/movies/movie-selector";
import SingleMovie from "../single-movie";
import { getMovies } from "../../store/movies/actions";
import MovieFilters from "../movie-filters";
import { Filters, Movie } from "../../type";
import { applyFilters, applySorting } from "../helpers";
import SortMovies from "../movie-sort";
import { CriteriaSortEnum, OrderSortEnum } from "../enums";

const Movies = () => {
  const movies = useAppSelector(moviesSelector);
  const dispatch = useAppDispatch();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([...movies]);
  const [sortCriteria, setSortCriteria] = useState<CriteriaSortEnum>(
    CriteriaSortEnum.RATING
  );
  const [sortOrder, setSortOrder] = useState<OrderSortEnum>(
    OrderSortEnum.DESCENDING
  );

  useEffect(() => {
    dispatch(getMovies());
  }, []);
  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  const sortMovies = () => {
    const sorted = applySorting(movies, sortOrder, sortCriteria);
    setFilteredMovies(sorted);
  };

  const handleCriteriaChange = (criteria: CriteriaSortEnum) => {
    setSortCriteria(criteria);
    sortMovies();
  };

  const handleOrderChange = (order: OrderSortEnum) => {
    setSortOrder(order);
    sortMovies();
  };
  const filterMovies = (filters: Filters) => {
    const filtered = applyFilters(movies, filters);
    setFilteredMovies(filtered);
  };
  return (
    <>
      <div>
        <MovieFilters onFilterChange={filterMovies} />
      </div>
      <div>
        <SortMovies
          criteria={sortCriteria}
          order={sortOrder}
          onCriteriaChange={handleCriteriaChange}
          onOrderChange={handleOrderChange}
        />
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
