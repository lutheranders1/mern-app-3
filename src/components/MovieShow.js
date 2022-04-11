import React, { useEffect, useState, Link, useHistory, useParams } from "react";

const deleteMovie = require("../supportFunctions/api");
const axios = require("axios");

export default function MovieShow({ isLoggedIn }) {
  const [movie, setMovie] = useState([]);

  const id = useParams();

  const navigate = useHistory();

  useEffect(() => {
    async function fetchMovie() {
      const config = {
        method: "get",
        url: `/api/movies/${id}`,
        headers: {},
      };
      const response = await axios(config);
      console.log(response.data.rating);

      setMovie(response.data);
    }
    fetchMovie();
  }, [id]);

  const handleDeleteClick = () => {
    deleteMovie(id)
      .then((data) => {
        console.log(data);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className="movie-show-div">
      <div className="movie-info">
        <h1>{movie.title}</h1>
        <p>Director: {movie.director}</p>
        <p>Released: {movie.year}</p>
      </div>
      {isLoggedIn ? (
        <>
          <div id="alter-movie-buttons" className="alter-movie-buttons">
            <button className="button">
              <Link className="link" to={`/movies/${id}/edit`}>
                Edit
              </Link>
            </button>
            <button className="button" onClick={handleDeleteClick}>
              Delete
            </button>
          </div>
        </>
      ) : (
        <>
          <div id="alter-movie-buttons" className="alter-movie-buttons">
            <p>Log in to review this movie</p>
            <button id="button" className="button">
              <Link className="link" to={"/login"}>
                Log In
              </Link>
            </button>
            <button id="button" className="button">
              <Link className="link" to={"/register"}>
                Sign Up
              </Link>
            </button>
          </div>
        </>
      )}
    </div>
  );
}
