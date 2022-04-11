import * as React from "react";
// import axios from 'axios'
import { useState } from "react";
// import { setToken } from '../helpers/auth'
import { useHistory } from "react-router-dom";
import { register } from "../supportFunctions/api";
import { Form } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import FormInput from "../components/FormInput";

export default function Register() {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  });

  const [errorInfo, setErrorInfo] = useState({});

  const [isError, setIsError] = useState(false);

  const navigate = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    register(data).then(handleSuccessfulRegister).catch(handleError);
  };

  const handleSuccessfulRegister = () => {
    setIsError(false);
    navigate("/login");
  };

  const handleError = (error) => {
    if (error.response) {
      setErrorInfo(error.response.data);
      setIsError(true);
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
        <h1>Sign Up</h1>
        <Form onSubmit={handleSubmit} className="form">
          <div>
            <Fade left>
              <FormInput
                placeholder="username"
                type="text"
                name="username"
                {...formInputProps}
              />
            </Fade>
          </div>
          <div>
            <Fade right>
              <FormInput
                placeholder="email@email.com"
                type="email"
                name="email"
                {...formInputProps}
              />
            </Fade>
          </div>

          <div>
            <Fade left>
              <FormInput
                placeholder="password"
                type="password"
                name="password"
                {...formInputProps}
              />
            </Fade>
          </div>
          <div>
            <Fade right>
              <FormInput
                placeholder="password confirmation"
                type="password"
                name="passwordConfirmation"
                {...formInputProps}
              />
            </Fade>
          </div>
          <div>
            <Fade left>
              <Form.Control type="submit" value="Register" />
            </Fade>
          </div>
          {isError ? (
            <div className="error">
              <p>Error. Please try again.</p>
            </div>
          ) : (
            <></>
          )}
        </Form>
      </div>
    </section>
  );
}
