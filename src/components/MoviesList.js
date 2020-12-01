import React from "react";
import { Link } from "react-router-dom"

export const MoviesList = ({ movies }) => {
  return (
    <>
    <h2>Popular movies</h2>
      <ul>
        {movies.map((m) => (
          <>
            <li>{m.title}</li>
            <Link to={`/movie/${m.id}`}>Details</Link>
          </>
        ))} 
      </ul>
    </>
  );
};
