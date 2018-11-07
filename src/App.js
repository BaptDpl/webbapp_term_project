import React, { Component } from "react";
import "./App.css";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

/*
$(document).ready(function() {
  $(".title").lettering();
});
*/

class App extends Component {
  render() {
    return (
      <div className="">
        <NavLink to="/page1">
          <img alt="totem" src="totem.png" className="mb-5 mx-auto d-block" />
        </NavLink>
        <h1 className="mt-5">
          <span className="text-info title">Find </span>
          <span className="text-primary title">Your </span>
          <span className="text-danger title">Totem </span>
          <span className="text-warning title">Animal! </span>
        </h1>
      </div>
    );
  }
}

export default App;
