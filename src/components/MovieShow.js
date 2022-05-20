import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
//import ReactPlayer from "react-player";
import { deleteMovie } from "../supportFunctions/api";

const MovieShow = ({ isLoggedIn }) => {
  // let numberOfLikes = 0
  // const [likes, setLikes] = useState(0)

  const [movie, setMovie] = useState([]);

  const { id } = useParams();

  const navigate = useHistory();

  useEffect(() => {
    async function fetchMovie() {
      const config = {
        method: "get",
        url: `https://salty-crag-11243.herokuapp.com/api/movies/${id}`,
        headers: {},
      };
      const response = await axios(config);

      setMovie(response.data);
    }
    fetchMovie();
  }, [id]);

  const handleDeleteClick = () => {
    deleteMovie(id)
      .then((data) => {
        console.log(data);
        navigate.push("/movies");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  return (
    <div className="movie-show-div">
      <div className="movie-data-container-div">
        <div className="movie-info">
          <h1>{movie.title}</h1>
          <p>Director: {movie.director}</p>
          <p>Released: {movie.year}</p>
          <p>Review: {movie.review}</p>
        </div>
      </div>
      {isLoggedIn ? (
        <>
          <div id="alter-movie-buttons" className="alter-movie-buttons">
            <Button className="button" onClick={handleDeleteClick}>
              Delete
            </Button>
          </div>
        </>
      ) : (
        <>
          <div id="alter-movie-buttons" className="alter-movie-buttons">
            <p>Log in to rate this movie</p>
            <Button id="button" className="button">
              <Link className="link" to={"/login"}>
                Log In
              </Link>
            </Button>
            <Button id="button" className="button">
              <Link className="link" to={"/register"}>
                Sign Up
              </Link>
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default MovieShow;
