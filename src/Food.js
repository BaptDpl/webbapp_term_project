import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Food extends Component {
  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="orange"
            value={1}
            src="orange.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
            animal="herbivore"
          />
          <Image
            alt="doughnut"
            value={2}
            src="doughnut.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
            animal="bird"
          />
          <Image
            alt="fish"
            value={3}
            src="fish.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
            animal="reptile"
          />
          <Image
            alt="steak"
            value={4}
            src="steak.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
            animal="feline"
          />
          <Image
            alt="pint"
            value={5}
            src="pint.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
            animal="fish"
          />
        </div>
        <Text text3={"Favourite "} text4={"Food!"} />
      </div>
    );
  }
}
export default Food;
