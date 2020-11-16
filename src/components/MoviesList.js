import React from "react";
import { Link } from "react-router-dom"

export const MoviesList = ({ movies }) => {
  return (
    <>
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
