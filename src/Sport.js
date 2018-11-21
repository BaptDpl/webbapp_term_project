import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Sport extends Component {
  state = {
    color: "",
    food: "",
    sport: ""
  };

  render() {
    //console.log(this.props.history);
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="football"
            src="football.png"
            currPage="sport"
            nextPage="/page4"
            history={this.props.history}
          />
          <Image
            alt="soccer"
            src="soccer.png"
            currPage="sport"
            nextPage="/page4"
            history={this.props.history}
          />
          <Image
            alt="basketball"
            src="basketball.png"
            currPage="sport"
            nextPage="/page4"
            history={this.props.history}
          />
          <Image
            alt="baseball"
            src="baseball.png"
            currPage="sport"
            nextPage="/page4"
            history={this.props.history}
          />
          <Image
            alt="puck"
            src="puck.png"
            currPage="sport"
            nextPage="/page4"
            history={this.props.history}
          />
        </div>
        <Text text={"Sport!"} />
      </div>
    );
  }
}
export default Sport;
