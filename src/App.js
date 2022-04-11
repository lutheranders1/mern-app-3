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
      <footer>
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
      <footer>
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

      <Movies />
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
      <footer>
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
      <footer>
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
      <footer>
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
      <footer>
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
      <footer>
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
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div>
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
