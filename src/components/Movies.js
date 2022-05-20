//import Footer from "./Footer";
import React from "react";
import { useState, useEffect } from "react";
//import { Fade } from "react-bootstrap";
import FadeIn from "react-fade-in";
import MovieCard from "../components/MovieCard";
import { fetchAllMovies } from "../supportFunctions/api";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetchAllMovies().then(setMovies);
  }, []);

  return (
    <div className="movie-list-div">
      <ul className="movie-list">
        {movies.map((m) => (
          <FadeIn>
            <li key={m._id}>
              <MovieCard {...m} />
            </li>
          </FadeIn>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
