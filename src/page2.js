import React, { Component } from "react";
import "./App.css";

class Page2 extends Component {
  handle = (e, data) => {
    console.log(data);
    this.props.history.push("/page3");
  };

  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <img
            alt="orange"
            icon=""
            src="orange.png"
            className="mb-3 mx-auto d-block"
            onClick={e => this.handle(e, "orange")}
          />
          <img
            alt="doughnut"
            icon=""
            src="doughnut.png"
            className="mb-3 mx-auto d-block"
            onClick={e => this.handle(e, "doughnut")}
          />
          <img
            alt="fish"
            icon=""
            src="fish.png"
            className="mb-3 mx-auto d-block"
            onClick={e => this.handle(e, "green")}
          />
          <img
            alt="steak"
            icon=""
            src="steak.png"
            className="mb-3 mx-auto d-block"
            onClick={e => this.handle(e, "fish")}
          />
          <img
            alt="pint"
            icon=""
            src="pint.png"
            className="mb-3 mx-auto d-block"
            onClick={e => this.handle(e, "pint")}
          />
        </div>
        <h1 className="mt-5">
          <span className="text-info ">Choose </span>
          <span className="text-primary ">Your </span>
          <span className="text-danger ">Favorite </span>
          <span className="text-warning ">Food! </span>
        </h1>
      </div>
    );
  }
}
export default Page2;
