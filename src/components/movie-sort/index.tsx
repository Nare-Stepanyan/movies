import React, { ChangeEvent } from "react";
import { CriteriaSortEnum, OrderSortEnum } from "../enums";

type SortMoviesProps = {
  criteria: string;
  order: string;
  onCriteriaChange: (criteria: CriteriaSortEnum) => void;
  onOrderChange: (order: OrderSortEnum) => void;
};

const SortMovies: React.FC<SortMoviesProps> = ({
  criteria,
  order,
  onCriteriaChange,
  onOrderChange,
}) => {
  const handleCriteriaChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onCriteriaChange(e.target.value as CriteriaSortEnum);
  };

  const handleOrderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onOrderChange(e.target.value as OrderSortEnum);
  };

  return (
    <div>
      <label htmlFor="sortCriteria">Sort by:</label>
      <select
        id="sortCriteria"
        value={criteria}
        onChange={handleCriteriaChange}
      >
        <option value="year">Year</option>
        <option value="rating">Rating</option>
      </select>

      <label htmlFor="sortOrder">Sort order:</label>
      <select id="sortOrder" value={order} onChange={handleOrderChange}>
        <option value="ascending">Ascending</option>
        <option value="descending">Descending</option>
      </select>
    </div>
  );
};

export default SortMovies;
