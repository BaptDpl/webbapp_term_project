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
            animal="feline"
          />
          <Image
            alt="soccer"
            value={2}
            src="soccer.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
            animal="herbivore"
          />
          <Image
            alt="basketball"
            value={3}
            src="basketball.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
            animal="bird"
          />
          <Image
            alt="baseball"
            value={4}
            src="baseball.png"
            currPage="sport"
            nextPage="/Emotion"
            history={this.props.history}
            animal="reptile"
          />
          <Image
            alt="puck"
            value={5}
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
