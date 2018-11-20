import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Color extends Component {
  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="blue"
            src="blue.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
          />
          <Image
            alt="green"
            src="green.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
          />
          <Image
            alt="pink"
            src="pink.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
          />
          <Image
            alt="red"
            src="red.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
          />
          <Image
            alt="yellow"
            src="yellow.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
          />
        </div>

        <Text text={"Color!"} />
      </div>
    );
  }
}
export default Color;
