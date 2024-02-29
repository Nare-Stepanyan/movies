import React, { useState } from "react";
import { countries, genres } from "../../data";
import { Filters } from "../../type";

interface MovieFiltersProps {
  onFilterChange: (filters: Filters) => void;
}

const MovieFilters: React.FC<MovieFiltersProps> = ({ onFilterChange }) => {
  const [filters, setFilters] = useState<Filters>({
    minYear: null,
    maxYear: null,
    country: "",
    minRating: null,
    maxRating: null,
    genre: "",
    actor: "",
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({ ...prevFilters, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onFilterChange(filters);
  };

  return (
    <div className="movie-filters">
      <form onSubmit={handleSubmit}>
        <label>
          Year Range:
          <input
            type="number"
            name="minYear"
            value={filters.minYear as number}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="maxYear"
            value={filters.maxYear as number}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Country:
          <select
            name="country"
            value={filters.country}
            onChange={handleFilterChange}
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </label>
        <label>
          Rating Range:
          <input
            type="number"
            name="minRating"
            value={filters.minRating as number}
            onChange={handleFilterChange}
          />
          <input
            type="number"
            name="maxRating"
            value={filters.maxRating as number}
            onChange={handleFilterChange}
          />
        </label>
        <label>
          Genre:
          <select
            name="genre"
            value={filters.genre}
            onChange={handleFilterChange}
          >
            <option value="">Select Genre</option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </label>
        <label>
          Actor:
          <input
            type="string"
            name="actor"
            value={filters.actor}
            onChange={handleFilterChange}
          />
        </label>
        <button type="submit">Apply Filters</button>
      </form>
    </div>
  );
};

export default MovieFilters;
