import React from "react";
import { useLocation } from "react-router-dom";

const MoviePlayer = () => {
  const location = useLocation();
  const movie = location.state.movie;

  return (
    <div className="movie-page">
      <div className="movie-media">
        <video controls autoPlay>
          <source src={movie.videoUrl} type="video/mp4" />
        </video>
      </div>
      <div className="movie-details">
        <h2>{movie.title}</h2>
        <p>Description: {movie.description}</p>
        <p>Year: {movie.year}</p>
        <p>Country: {movie.country}</p>
        <p>Rating: {movie.rating}</p>
        <p>Genres: {movie.genres.join(", ")}</p>
        <p>Actors: {movie.actors.join(", ")}</p>
      </div>
    </div>
  );
};

export default MoviePlayer;
