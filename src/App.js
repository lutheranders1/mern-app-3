import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

//import axios from "axios";

import Home from "./components/Home";
import Register from "./components/Register";
import Signin from "./components/Signin";
import Profile from "./components/Profile";
import Movies from "./components/Movies";
import Navbar from "./components/Navbar";
import MovieShow from "./components/MovieShow";
import MovieAdd from "./components/MovieAdd";
import NotFound from "./components/NotFound";
import MovieEdit from "./components/MovieEdit";
import Footer from "./components/Footer";
import { getToken } from "./supportFunctions/auth";

const style = {
  borderTop: "1px solid #E7E7E7",
  textAlign: "center",
  position: "fixed",
  left: "0",
  bottom: "0",
  width: "100%",
};

function ProfilePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Profile />
      </main>
      <footer style={style}>
        <Footer />
      </footer>
    </>
  );
}

function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Home />
      </main>
      <footer style={style}>
        <Footer />
      </footer>
    </>
  );
}

function MoviesList() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Movies />
      </main>
      <footer style={style}>
        <Footer />
      </footer>
    </>
  );
}

function MovieShowPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <MovieShow isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </main>
      <footer style={style}>
        <Footer />
      </footer>
    </>
  );
}

function AddOneMovie() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <MovieAdd />
      </main>
      <footer style={style}>
        <Footer />
      </footer>
    </>
  );
}

function EditOneMovie() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <MovieEdit />
      </main>
      <footer style={style}>
        <Footer />
      </footer>
    </>
  );
}

function SigninPage(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Signin {...props} setIsLoggedIn={setIsLoggedIn} />
      </main>
      <footer style={style}>
        <Footer />
      </footer>
    </>
  );
}

function RegisterPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <Register />
      </main>
      <footer style={style}>
        <Footer />
      </footer>
    </>
  );
}

function NotFoundPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (getToken()) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <header>
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </header>
      <main>
        <NotFound />
      </main>
      <footer style={style}>
        <Footer />
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="bg-light">
        <Switch>
          <Route path={"/movies/new"} component={AddOneMovie} />
          <Route path={"/movies/:id/edit"} component={EditOneMovie} />

          <Route path={"/movies/:id"} component={MovieShowPage} />
          <Route path={"/movies"} component={MoviesList} />
          <Route path={"/login"} component={SigninPage} />
          <Route path={"/register"} component={RegisterPage} />
          <Route path={"/profile"} component={ProfilePage} />
          <Route path={"/notfound"} component={NotFoundPage} />
          <Route index component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
