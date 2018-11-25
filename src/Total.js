import React, { Component } from "react";
import "./App.css";
import Text from "./text";
import Image from "./image";

class Total extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "mt-5",
      first: "fix",
      sec: "fix",
      third: "fix",
      fourth: "fix",
      fifth: "fix"
    };
  }

  render() {
    setTimeout(() => {
      this.setState({ text: "mt-5 animation" });
    }, 1000);
    setTimeout(() => {
      this.setState({ first: "animation" });
    }, 2000);
    setTimeout(() => {
      this.setState({ sec: "animation" });
    }, 3000);
    setTimeout(() => {
      this.setState({ third: "animation" });
    }, 4000);
    setTimeout(() => {
      this.setState({ fourth: "animation" });
    }, 5000);
    setTimeout(() => {
      this.setState({ fifth: "animation" });
    }, 6000);
    setTimeout(() => {
      this.props.history.push({
        pathname: "/Animal",
        state: {
          value: this.props.history.location.state.value
        }
      });
    }, 8000);

    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt={`${this.props.history.location.state.color}`}
            value={1}
            icon={this.state.first}
            src={`${this.props.history.location.state.color}.png`}
            currPage="total"
            nextPage="/Animal"
            history={this.props.history}
          />
          <Image
            alt={`${this.props.history.location.state.food}`}
            value={2}
            icon={this.state.sec}
            src={`${this.props.history.location.state.food}.png`}
            currPage="total"
            nextPage="/Animal"
            history={this.props.history}
          />
          <Image
            alt={`${this.props.history.location.state.sport}`}
            value={3}
            icon={this.state.third}
            src={`${this.props.history.location.state.sport}.png`}
            currPage="total"
            nextPage="/Animal"
            history={this.props.history}
          />
          <Image
            alt={`${this.props.history.location.state.emotion}`}
            value={4}
            icon={this.state.fourth}
            src={`${this.props.history.location.state.emotion}.png`}
            currPage="total"
            nextPage="/Animal"
            history={this.props.history}
          />
          <Image
            alt={`${this.props.history.location.state.transport}`}
            value={5}
            icon={this.state.fifth}
            src={`${this.props.history.location.state.transport}.png`}
            currPage="total"
            nextPage="/Animal"
            history={this.props.history}
          />
        </div>
        <Text
          class={this.state.text}
          text1={" ‏‏‎ Your  ‏‏‎  ‏‏‎ "}
          text2={"Totem  ‏‏‎  ‏‏‎ "}
          text3={"Animal  ‏‏‎  ‏‏‎ "}
          text4={"Is ‎ ‎ "}
          text5={"... ? ! "}
        />
      </div>
    );
  }
}
export default Total;