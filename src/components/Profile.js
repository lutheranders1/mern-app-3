import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "react-bootstrap/Card";
import MovieCard from "../components/MovieCard";
import FadeIn from "react-fade-in";
import { getToken } from "../supportFunctions/auth";

const Profile = () => {
  const [moviesAdded, setMoviesAdded] = useState([]);
  const [userData, setUserData] = useState({
    username: "",
    email: "",
  });

  useEffect(() => {
    async function getProfile() {
      const config = {
        method: "get",
        url: "https://salty-crag-11243.herokuapp.com/api/profile",
        headers: {
          Authorization: `${getToken()}`,
        },
      };

      const response = await axios(config);
      setMoviesAdded(response.data.createdMovies);
      setUserData(response.data);
      console.log(response.data);
    }
    getProfile();
  }, []);

  return (
    <div className="profile-container">
      <div className="personal-details">
        <Card className="profile-card">
          <Card.Body className="card-body">
            <Card.Title className="card-title">
              <p className="username">Hello {userData.username} !</p>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className="movie-list-div" id="created-movies-div">
        <p className="movies-add-by">Your Movies</p>
        <ul className="movie-list" id="profile-movie-list">
          {moviesAdded.map((m) => (
            <FadeIn>
              <li key={m._id}>
                <MovieCard {...m} />
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Profile;
