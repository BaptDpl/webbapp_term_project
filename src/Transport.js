import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Transport extends Component {
  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="plane"
            value={1}
            src="plane.png"
            currPage="transport"
            nextPage="/Total"
            history={this.props.history}
          />
          <Image
            alt="boat"
            value={2}
            src="boat.png"
            currPage="transport"
            nextPage="/Total"
            history={this.props.history}
          />
          <Image
            alt="train"
            value={3}
            src="train.png"
            currPage="transport"
            nextPage="/Total"
            history={this.props.history}
          />
          <Image
            alt="car"
            value={4}
            src="car.png"
            currPage="transport"
            nextPage="/Total"
            history={this.props.history}
          />
          <Image
            alt="bike"
            value={5}
            src="bike.png"
            currPage="transport"
            nextPage="/Total"
            history={this.props.history}
          />
        </div>
        <Text text3={"Favorite "} text4={"Transport!"} />
      </div>
    );
  }
}
export default Transport;
