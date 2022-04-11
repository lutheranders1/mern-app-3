import React, { useState } from "react";
import { useState } from "react";
import { setToken } from "../supportFunctions/auth";
import { login } from "../supportFunctions/api";
import { useNavigate } from "react-router-dom";

export default function Login({ setIsLoggedIn }) {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [errorInfo, setErrorInfo] = useState({});
  const [isError, setIsError] = useState(false);
  const navigate = useNavigate();

  const handleSuccessfulLogin = ({ token }) => {
    setToken(token);
    setIsLoggedIn(true);
    setIsError(false);
    navigate("/");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    login(data)
      .then(handleSuccessfulLogin)
      .catch(handleError);
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
  };

  const formInputProps = { data, errorInfo, handleFormChange };
  return (
    <>
      <section className="form-section">
        <div className="form-box">
          <h1>Log in</h1>
          <form onSubmit={handleSubmit} className="form">
            <div className="mb-3" controlId="formBasicEmail">
              <input
                placeholder="username"
                type="text"
                name="username"
                {...formInputProps}
              />

              <input
                placeholder="password"
                type="password"
                name="password"
                {...formInputProps}
              />

              <div>
                <button type="submit" value="Login" />
              </div>
              {isError ? (
                <div className="error">
                  <p>Error. Please try again.</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
