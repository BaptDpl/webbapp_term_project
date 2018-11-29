import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Color extends Component {
  render() {
    //console.log(this.props.history);
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="blue"
            value={1}
            src="blue.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
            animal="fish"
          />
          <Image
            alt="green"
            value={2}
            src="green.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
            animal="herbivore"
          />
          <Image
            alt="pink"
            value={3}
            src="pink.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
            animal="bird"
          />
          <Image
            alt="red"
            value={4}
            src="red.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
            animal="feline"
          />
          <Image
            alt="yellow"
            value={5}
            src="yellow.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
            animal="reptile"
          />
        </div>

        <Text text3={"Favourite "} text4={"Color!"} />
      </div>
    );
  }
}
export default Color;
