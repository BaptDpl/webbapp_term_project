import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Page3 extends Component {
  handle = (e, data) => {
    console.log(this.props);
    this.props.history.push("/page4");
  };

  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="football"
            src="football.png"
            nextPage="/page4"
            history={this.props.history}
          />
          <Image
            alt="soccer"
            src="soccer.png"
            nextPage="/page4"
            history={this.props.history}
          />
          <Image
            alt="basketball"
            src="basketball.png"
            nextPage="/page4"
            history={this.props.history}
          />
          <Image
            alt="baseball"
            src="baseball.png"
            nextPage="/page4"
            history={this.props.history}
          />
          <Image
            alt="puck"
            src="puck.png"
            nextPage="/page4"
            history={this.props.history}
          />
        </div>
        <Text text={"Sport!"} />
      </div>
    );
  }
}
export default Page3;
