import React, { Component } from "react";
import "./App.css";

class Page3 extends Component {
  handle = (e, data) => {
    console.log(data);
    this.props.history.push("/page4");
  };

  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <img
            alt="football"
            icon=""
            src="football.png"
            className="mb-3 mx-auto d-block"
            onClick={e => this.handle(e, "football")}
          />
          <img
            alt="soccer"
            icon=""
            src="soccer.png"
            className="mb-3 mx-auto d-block"
            onClick={e => this.handle(e, "soccer")}
          />
          <img
            alt="basketball"
            icon=""
            src="basketball.png"
            className="mb-3 mx-auto d-block"
            onClick={e => this.handle(e, "basketball")}
          />
          <img
            alt="baseball"
            icon=""
            src="baseball.png"
            className="mb-3 mx-auto d-block"
            onClick={e => this.handle(e, "baseball")}
          />
          <img
            alt="puck"
            icon=""
            src="puck.png"
            className="mb-3 mx-auto d-block"
            onClick={e => this.handle(e, "puck")}
          />
        </div>
        <h1 className="mt-5">
          <span className="text-info ">Choose </span>
          <span className="text-primary ">Your </span>
          <span className="text-danger ">Favorite </span>
          <span className="text-warning ">Sport! </span>
        </h1>
      </div>
    );
  }
}
export default Page3;
