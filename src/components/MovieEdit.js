import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { fetchOneMovie, getAxiosRequestConfig } from "../supportFunctions/api";
import MovieForm from "../components/MovieForm";
import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";

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
      navigate.push(`/movies/${response.data._id}`);
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

  // const goBack = () => {
  //   navigate(-1)
  // }

  const formInputProps = { data: movie, errorInfo, handleFormChange };

  return (
    <section className="form-section">
      <div className="form-box">
        <Form className="form" onSubmit={handleSubmit}>
          <h1>Edit a Movie</h1>
          <MovieForm formInputProps={formInputProps} />
          <div>
            <Form.Control type="submit" value="Edit Movie" />
          </div>

          {isError ? (
            <div className="error">
              <p>Error. Please try again</p>
            </div>
          ) : (
            <></>
          )}
        </Form>
      </div>
    </section>
  );
};

export default MovieEdit;
