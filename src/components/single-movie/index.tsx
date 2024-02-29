import React, { FC } from "react";
import { Movie } from "../../type";

type MoviePropTypes = {
  movie: Movie;
};

const SingleMovie: FC<MoviePropTypes> = ({ movie }) => {
  return (
    <div className="single-movie">
      <img src={movie.imageUrl} alt={movie.title} />
      <div className="movie-info">
        <h2>{movie.title}</h2>
        <p>Year: {movie.year}</p>
        <p>Rating: {movie.rating}</p>
      </div>
    </div>
  );
};

export default SingleMovie;
