import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import Color from "./Color";
import Food from "./Food";
import Sport from "./Sport";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="h-100 d-flex justify-content-center align-items-center">
          <Route path="/" component={App} exact />
          <Route path="/Color" component={Color} />
          <Route path="/Food" component={Food} />
          <Route path="/Sport" component={Sport} />
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
