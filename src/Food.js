import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Food extends Component {
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
            alt="orange"
            src="orange.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
          />
          <Image
            alt="doughnut"
            src="doughnut.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
          />
          <Image
            alt="fish"
            src="fish.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
          />
          <Image
            alt="steak"
            src="steak.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
          />
          <Image
            alt="pint"
            src="pint.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
          />
        </div>
        <Text text={"Food!"} />
      </div>
    );
  }
}
export default Food;
