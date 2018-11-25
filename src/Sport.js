import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Sport extends Component {
  render() {
    //console.log(this.props.history);
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="football"
            value={1}
            src="football.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
          />
          <Image
            alt="soccer"
            value={2}
            src="soccer.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
          />
          <Image
            alt="basketball"
            value={3}
            src="basketball.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
          />
          <Image
            alt="baseball"
            value={4}
            src="baseball.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
          />
          <Image
            alt="puck"
            value={5}
            src="puck.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
          />
        </div>
        <Text text3={"Favourite "} text4={"Sport!"} />
      </div>
    );
  }
}
export default Sport;
