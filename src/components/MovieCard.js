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
      <Card style={{ width: "50rem" }} className="movie-card">
        <Card.Body className="card-body">
          <Card.Title className="card-title">Title: {title}</Card.Title>
          <Card.Title className="card-title">Year: {year}</Card.Title>
          <Card.Title className="card-title">Review: {review}</Card.Title>
          <Card.Title className="card-title">Director: {director}</Card.Title>

          <Button className="button text-white">
            <Link className="link text-white" to={`/movies/${_id}`}>
              More Details
            </Link>
          </Button>
          {isLoggedIn ? (
            <Button className="button text-white">
              <Link className="link text-white" to={`/movies/${_id}/edit`}>
                Edit
              </Link>
            </Button>
          ) : (
            <></>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
