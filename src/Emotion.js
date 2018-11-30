import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Emotion extends Component {
  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="love"
            src="love.png"
            currPage="emotion"
            nextPage="/Transport"
            history={this.props.history}
            animal="herbivore"
          />
          <Image
            alt="happy"
            src="happy.png"
            currPage="emotion"
            nextPage="/Transport"
            history={this.props.history}
            animal="bird"
          />
          <Image
            alt="confused"
            src="confused.png"
            currPage="emotion"
            nextPage="/Transport"
            history={this.props.history}
            animal="reptile"
          />
          <Image
            alt="sad"
            src="sad.png"
            currPage="emotion"
            nextPage="/Transport"
            history={this.props.history}
            animal="fish"
          />
          <Image
            alt="mad"
            src="mad.png"
            currPage="emotion"
            nextPage="/Transport"
            history={this.props.history}
            animal="feline"
          />
        </div>
        <Text text3={"Current "} text4={"Emotion!"} />
      </div>
    );
  }
}
export default Emotion;
