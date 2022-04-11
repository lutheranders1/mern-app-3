import React from "react";
import { Form } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";

const MovieForm = ({ formInputProps }) => {
  const handleFormChange = formInputProps.handleFormChange;

  return (
    <>
      <Fade left>
        <Form.Control
          name="title"
          type="text"
          placeholder="Movie Title"
          onChange={handleFormChange}
          {...formInputProps}
        />
      </Fade>
      <Fade right>
        <Form.Control
          name="director"
          type="text"
          placeholder="Director"
          onChange={handleFormChange}
          {...formInputProps}
        />
      </Fade>
      <Fade left>
        <Form.Control
          name="year"
          type="number"
          placeholder="Year of release"
          min="1901"
          max="2050"
          onChange={handleFormChange}
          {...formInputProps}
        />
      </Fade>
      <Fade right>
        <Form.Control
          name="review"
          type="text"
          placeholder="review"
          onChange={handleFormChange}
          {...formInputProps}
        />
      </Fade>
    </>
  );
};

export default MovieForm;
