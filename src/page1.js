import React, { Component } from "react";
import "./App.css";

class Page1 extends Component {
  handle = (e, data) => {
    console.log(data);
    this.props.history.push("/page2");
  };

  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <p
            className="bg-success mr-3"
            onClick={e => this.handle(e, "green")}
          />
          <p
            className="bg-primary ml-3 mr-3"
            onClick={e => this.handle(e, "blue")}
          />
          <p
            className="bg-danger ml-3 mr-3"
            onClick={e => this.handle(e, "red")}
          />
          <p
            className="bg-warning ml-3 mr-3"
            onClick={e => this.handle(e, "yellow")}
          />
          <p
            className="bg-white ml-3 mr-3"
            onClick={e => this.handle(e, "white")}
          />
        </div>

        <h1 className="mt-5">
          <span className="text-info ">Choose </span>
          <span className="text-primary ">Your </span>
          <span className="text-danger ">Favorite </span>
          <span className="text-warning ">Color! </span>
        </h1>
      </div>
    );
  }
}
export default Page1;
