import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Page2 extends Component {
  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="orange"
            src="orange.png"
            nextPage="/page3"
            history={this.props.history}
          />
          <Image
            alt="doughnut"
            src="doughnut.png"
            nextPage="/page3"
            history={this.props.history}
          />
          <Image
            alt="fish"
            src="fish.png"
            nextPage="/page3"
            history={this.props.history}
          />
          <Image
            alt="steak"
            src="steak.png"
            nextPage="/page3"
            history={this.props.history}
          />
          <Image
            alt="pint"
            src="pint.png"
            nextPage="/page3"
            history={this.props.history}
          />
        </div>
        <Text text={"Food!"} />
      </div>
    );
  }
}
export default Page2;
