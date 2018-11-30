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
            src="football.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
            animal="feline"
          />
          <Image
            alt="soccer"
            src="soccer.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
            animal="herbivore"
          />
          <Image
            alt="basketball"
            src="basketball.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
            animal="bird"
          />
          <Image
            alt="baseball"
            src="baseball.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
            animal="reptile"
          />
          <Image
            alt="puck"
            src="puck.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
            animal="fish"
          />
        </div>
        <Text text3={"Favourite "} text4={"Sport!"} />
      </div>
    );
  }
}
export default Sport;
