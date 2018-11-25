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
            value={1}
            src="love.png"
            currPage="emotion"
            nextPage="/Transport"
            history={this.props.history}
          />
          <Image
            alt="happy"
            value={2}
            src="happy.png"
            currPage="emotion"
            nextPage="/Transport"
            history={this.props.history}
          />
          <Image
            alt="confused"
            value={3}
            src="confused.png"
            currPage="emotion"
            nextPage="/Transport"
            history={this.props.history}
          />
          <Image
            alt="sad"
            value={4}
            src="sad.png"
            currPage="emotion"
            nextPage="/Transport"
            history={this.props.history}
          />
          <Image
            alt="mad"
            value={5}
            src="mad.png"
            currPage="emotion"
            nextPage="/Transport"
            history={this.props.history}
          />
        </div>
        <Text text3={"Current "} text4={"Emotion!"} />
      </div>
    );
  }
}
export default Emotion;
