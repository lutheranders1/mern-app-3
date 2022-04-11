import axios from "axios";
import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import MovieCard from "../components/MovieCard";
//import { Link } from "react-router-dom";
import { getToken } from "../supportFunctions/auth";

export default function Profile() {
  const [moviesAdded, setMoviesAdded] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });
  ////////////////////////////////////////////////////////////////

  useEffect(() => {
    async function getProfile() {
      const config = {
        method: "get",
        url: "/api/profile",
        headers: {
          Authorization: `${getToken()}`,
        },
      };

      const response = await axios(config);
      setMoviesAdded(response.data.createdReview);
      setUserData(response.data);
      console.log(response.data);
    }
    getProfile();
  }, []);

  //if (!movie) return "createMovie";

  return (
    <div className="profile-container">
      <div className="personal-details">
        <Card.Body className="card-body">
          <Card.Title className="card-title">
            <p className="username">Welcome {userData.username} !</p>
          </Card.Title>
        </Card.Body>
      </div>
      <div className="movie-list-div" id="created-movies-div">
        <p className="movies-add-by">Your Movies</p>
        <ul className="movie-list" id="profile-movie-list">
          {moviesAdded.map((m) => (
            <li key={m._id}>
              <MovieCard {...m} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
