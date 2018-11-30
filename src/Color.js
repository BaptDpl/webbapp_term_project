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
            src="blue.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
            animal="fish"
          />
          <Image
            alt="green"
            src="green.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
            animal="herbivore"
          />
          <Image
            alt="pink"
            src="pink.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
            animal="bird"
          />
          <Image
            alt="red"
            src="red.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
            animal="feline"
          />
          <Image
            alt="yellow"
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
