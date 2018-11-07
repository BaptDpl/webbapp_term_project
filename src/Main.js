import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import App from "./App";
import page1 from "./page1";
import page2 from "./page2";
import page3 from "./page3";
import "bootstrap/dist/css/bootstrap.min.css";

class Main extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="h-100 d-flex justify-content-center align-items-center">
          <Route path="/" component={App} exact />
          <Route path="/page1" component={page1} />
          <Route path="/page2" component={page2} />
          <Route path="/page3" component={page3} />
        </div>
      </BrowserRouter>
    );
  }
}
export default Main;
