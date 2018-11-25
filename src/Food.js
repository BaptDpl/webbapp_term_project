import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Food extends Component {
  render() {
    //console.log(this.props.history);
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
          />
          <Image
            alt="doughnut"
            value={2}
            src="doughnut.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
          />
          <Image
            alt="fish"
            value={3}
            src="fish.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
          />
          <Image
            alt="steak"
            value={4}
            src="steak.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
          />
          <Image
            alt="pint"
            value={5}
            src="pint.png"
            currPage="food"
            nextPage="/Sport"
            history={this.props.history}
          />
        </div>
        <Text text3={"Favourite "} text4={"Food!"} />
      </div>
    );
  }
}
export default Food;
