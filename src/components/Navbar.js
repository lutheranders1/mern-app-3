import React from "react";
import { removeToken } from "../supportFunctions/auth";

import { Link, useHistory } from "react-router-dom";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
  const navigate = useHistory();

  const handleLogout = () => {
    removeToken();
    setIsLoggedIn(false);
    navigate("/");
  };
  return (
    <div>
      <ul class="nav justify-content-center text-white bg-dark ">
        <h3>uWatchApp</h3>
        <li class="nav-item">
          <Link to={"/"} className="nav-link">
            Home
          </Link>
        </li>
        <li class="nav-item">
          <Link to={"/movies"} className="nav-link">
            Movies
          </Link>
        </li>
        {isLoggedIn ? (
          <>
            <li class="nav-item">
              <Link to={"/profile"} className="nav-link">
                Profile
              </Link>
            </li>
            <li>
              <Link to="/movies/new" className="nav-link">
                Add Movie
              </Link>
            </li>
            <li>
              <span className="nav-link" onClick={handleLogout}>
                Logout
              </span>
            </li>
          </>
        ) : (
          <>
            <li class="nav-item">
              <Link to={"/register"} className="nav-link">
                Sign Up
              </Link>
            </li>
            <li class="nav-item">
              <Link to={"/login"} className="nav-link">
                Sign in
              </Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
}
