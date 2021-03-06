import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import Color from "./Color";
import Food from "./Food";
import Sport from "./Sport";
import Emotion from "./Emotion";
import Transport from "./Transport";
import Total from "./Total";
import Animal from "./Animal";
import ErrorPage from "./ErrorPage";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="h-100 d-flex justify-content-center align-items-center">
          <Route path="/" component={App} exact />
          <Route path="/Color" component={Color} />
          <Route path="/Food" component={Food} />
          <Route path="/Sport" component={Sport} />
          <Route path="/Emotion" component={Emotion} />
          <Route path="/Transport" component={Transport} />
          <Route path="/Total" component={Total} />
          <Route path="/Animal" component={Animal} />
          <Route path="/ErrorPage" component={ErrorPage} />
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
