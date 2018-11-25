import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Animal extends Component {
  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="yellow"
            value={5}
            src="yellow.png"
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
          />
        </div>
        <Text
          text1={"Your "}
          text2={"Totem "}
          text3={"Animal "}
          text4={"Is... "}
        />
      </div>
    );
  }
}
export default Animal;
