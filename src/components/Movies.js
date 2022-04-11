//import Footer from "./Footer";
import { fetchAllMovies } from "../supportFunctions/api";
import MovieCard from "../components/MovieCard";

import React, { useEffect, useState } from "react";

export default function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAllMovies().then(setMovies);
  }, []);

  return (
    <div className="movie-list-div">
      <ul className="movie-list">
        {movies.map((m) => (
          <li key={m._id}>
            <MovieCard {...m} />
          </li>
        ))}
      </ul>
    </div>
  );
}
