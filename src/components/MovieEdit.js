import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { fetchOneMovie, getAxiosRequestConfig } from "../supportFunctions/api";

const MovieEdit = () => {
  const [movie, setMovie] = useState({
    title: "",
    director: "",
    releaseYear: "",
    review: "",
  });

  const [errorInfo, setErrorInfo] = useState({});
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const navigate = useHistory();

  useEffect(() => {
    fetchOneMovie(id).then(setMovie);
  }, [id]);

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data);
      setIsError(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const config = getAxiosRequestConfig(`/movies/${id}`, movie, "put");

    try {
      const response = await axios(config).catch(handleError);

      console.log(response.data);
      setIsError(false);
      navigate(`/movies/${response.data._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const formInputProps = { data: movie, errorInfo, handleFormChange };

  return (
    <section className="form-section">
      <div className="form-box">
        <form className="form" onSubmit={handleSubmit}>
          <h1>Edit a Movie</h1>
          <div formInputProps={formInputProps} />
          <div>
            <button type="submit" value="Edit Movie" />
          </div>
          <div>
            {/* <input type="button" onClick={goBack} value="Cancel" /> */}
            <button className="button" onClick={() => navigate(-1)}>
              Go Back
            </button>
          </div>
          {isError ? (
            <div className="error">
              <p>Error. Please try again</p>
            </div>
          ) : (
            <></>
          )}
        </form>
      </div>
    </section>
  );
};

export default MovieEdit;
