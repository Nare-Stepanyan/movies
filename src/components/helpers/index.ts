import { Filters, Movie } from "../../type";

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
