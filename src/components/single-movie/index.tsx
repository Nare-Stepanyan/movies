import React, { FC } from "react";
import { Movie } from "../../type";
import { useNavigate } from "react-router-dom";

type MoviePropTypes = {
  movie: Movie;
};

const SingleMovie: FC<MoviePropTypes> = ({ movie }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/movie", { state: { movie } });
  };
  return (
    <div className="single-movie" onClick={handleClick}>
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
