import { Filters, Movie } from "../../type";
import { CriteriaSortEnum, OrderSortEnum } from "../enums";

export const applyFilters = (movies: Movie[], filters: Filters): Movie[] => {
  return movies.filter((movie) => {
    const { year, country, rating, genres, actors } = movie;

    const countryMatches =
      filters.country === "" || country === filters.country;

    const yearInRange =
      (filters.minYear === null || year >= filters.minYear) &&
      (filters.maxYear === null || year <= filters.maxYear);

    const ratingInRange =
      (filters.minRating === null || rating >= filters.minRating) &&
      (filters.maxRating === null || rating <= filters.maxRating);

    const genreMatches = filters.genre === "" || genres.includes(filters.genre);

    const actorMatches = filters.actor === "" || actors.includes(filters.actor);

    return (
      yearInRange &&
      countryMatches &&
      ratingInRange &&
      genreMatches &&
      actorMatches
    );
  });
};

export const applySorting = (
  movies: Movie[],
  order: OrderSortEnum,
  criteria: CriteriaSortEnum
): Movie[] => {
  return [...movies].sort((a, b) => {
    if (order === OrderSortEnum.ASCENDING) {
      return a[criteria] - b[criteria];
    } else {
      return b[criteria] - a[criteria];
    }
  });
};
