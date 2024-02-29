import React, { useState } from "react";
import { Movie } from "../../../type";
import { useAppDispatch } from "../../app/hook";
import { addMovie } from "../../../store/movies/actions";
import { v4 as uuidv4 } from "uuid";
import Button from "../../button";

const MovieForm = () => {
  const [formData, setFormData] = useState<Movie>({
    id: uuidv4(),
    title: "",
    description: "",
    year: 0,
    country: "",
    rating: 0,
    genres: [],
    actors: [],
    imageUrl: "",
    videoUrl: "",
  });
  const dispatch = useAppDispatch();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { options } = e.target;
    const selectedGenres = Array.from(options)
      .filter((option) => option.selected)
      .map((option) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      genres: selectedGenres,
    }));
  };

  const handleActorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      actors: [...prevData.actors, value],
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addNewMovie(formData);
  };
  const addNewMovie = (movie: Movie) => {
    if (movie) {
      dispatch(addMovie(movie));
    }
    setFormData({
      id: uuidv4(),
      title: "",
      description: "",
      year: 0,
      country: "",
      rating: 0,
      genres: [],
      actors: [],
      imageUrl: "",
      videoUrl: "",
    });
  };

  return (
    <div className="form-container">
      <form>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="year">Year:</label>
        <input
          type="number"
          id="year"
          name="year"
          value={formData.year}
          onChange={handleChange}
        />
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          name="country"
          value={formData.country}
          onChange={handleChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          type="number"
          id="rating"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <label htmlFor="genres">Genres:</label>
        <select id="genres" name="genres" multiple onChange={handleGenreChange}>
          <option value="action">Action</option>
          <option value="comedy">Comedy</option>
          <option value="drama">Drama</option>
          <option value="horror">Horror</option>
        </select>
        <label htmlFor="actors">Actors:</label>
        <input
          type="text"
          id="actors"
          name="actors"
          value={formData.actors.join(", ")}
          onChange={handleActorChange}
        />
        <label htmlFor="imageUrl">Image URL:</label>
        <input
          type="text"
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <label htmlFor="videoUrl">Video URL:</label>
        <input
          type="text"
          id="videoUrl"
          name="videoUrl"
          value={formData.videoUrl}
          onChange={handleChange}
        />
        <Button label="Add" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default MovieForm;
