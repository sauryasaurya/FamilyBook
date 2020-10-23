import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "./components/home";
import LoginFrom from "./components/loginForm";
import NavBar from "./components/navBar";
import Profile from "./components/profile";
import RegisterFrom from "./components/registerForm";

function App() {
  return (
    <>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterFrom} />
          <Route path="/login" component={LoginFrom} />
          <Route exact path="/" component={Home} />
        </Switch>
      </main>
    </>
  );
}

export default App;
