import axios from "axios";
import * as React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { getAxiosRequestConfig } from "../supportFunctions/api";
import MovieForm from "../components/MovieForm";
import { Form } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const MovieAdd = () => {
  const [data, setData] = useState({
    title: "",
    director: "",
    releaseYear: "",
    review: "",
  });

  const [errorInfo, setErrorInfo] = useState({});
  const [isError, setIsError] = useState(false);

  const navigate = useHistory();

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data);
      setIsError(true);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(data);
    const config = getAxiosRequestConfig("/movies", data);

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
    setData({
      ...data,
      [name]: value,
    });
    console.log(data);
  };

  const formInputProps = { data, errorInfo, handleFormChange };

  return (
    <section className="form-section">
      <div className="form-box">
        <h1>Add a Movie</h1>
        <Form onSubmit={handleSubmit} className="form">
          <MovieForm formInputProps={formInputProps} />
          <div>
            <Fade right>
              <Form.Control
                id="submit-button"
                type="submit"
                value="Add Movie"
              />
            </Fade>
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

export default MovieAdd;
