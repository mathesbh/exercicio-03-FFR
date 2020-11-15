import React, { useEffect, useState } from "react";
import { MoviesList } from "./MoviesList";
import { MoviesService } from "../api/MoviesService";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const {
      data: { results }
    } = await MoviesService.getPopularMovies();

    setMovies(results);
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <h1>Movies</h1>
      <MoviesList movies={movies} />
    </div>
  );
}