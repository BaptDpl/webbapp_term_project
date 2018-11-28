import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class ErrorPage extends Component {
  render() {
    //console.log(this.props.history);
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="error"
            value={5}
            icon="spin"
            class="spin"
            src="error.png"
            currPage="error"
            nextPage="/"
            history={this.props.history}
          />
        </div>
        <Text
          text1={"Oh oh, "}
          text2={"Something "}
          text3={"Went "}
          text4={"Wrong!"}
        />
      </div>
    );
  }
}
export default ErrorPage;
