export type Movie = {
  id: string;
  title: string;
  description: string;
  year: number;
  country: string;
  rating: number;
  genres: string[];
  actors: string[];
  imageUrl: string;
  videoUrl: string;
};

export type Filters = {
  minYear: number | null;
  maxYear: number | null;
  country: string;
  minRating: number | null;
  maxRating: number | null;
  genre: string;
  actor: string;
};
