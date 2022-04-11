import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getToken } from "../supportFunctions/auth";
import { useState, useEffect } from "react";

const MovieCard = ({ _id, title, year, review, director }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <Card style={{ width: "18rem" }} className="movie-card">
        <Card.Body className="card-body">
          <Card.Title className="card-title">{title}</Card.Title>
          <Card.Title className="card-title">{year}</Card.Title>
          <Card.Title className="card-title">{review}</Card.Title>
          <Card.Title className="card-title">{director}</Card.Title>
          {/* <Card.Text className="card-user">
            <p>Added by {user?.username}</p>
          </Card.Text> */}
          <Button className="button text-danger">
            <Link className="link text-danger" to={`/movies/${_id}`}>
              Update
            </Link>
            {isLoggedIn}
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
