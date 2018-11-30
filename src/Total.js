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

  componentWillMount = () => {
    if (this.props.history.location.state === undefined) {
      this.props.history.push({
        pathname: "/ErrorPage"
      });
      return;
    }
  };

  componentDidMount = () => {
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
          animalCount: [...this.props.history.location.state.animalCount]
        }
      });
    }, 8000);
  };

  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt={`${this.props.history.location.state.color}`}
            icon={this.state.first}
            src={`${this.props.history.location.state.color}.png`}
            currPage="total"
            nextPage="/Animal"
            history={this.props.history}
          />
          <Image
            alt={`${this.props.history.location.state.food}`}
            icon={this.state.sec}
            src={`${this.props.history.location.state.food}.png`}
            currPage="total"
            nextPage="/Animal"
            history={this.props.history}
          />
          <Image
            alt={`${this.props.history.location.state.sport}`}
            icon={this.state.third}
            src={`${this.props.history.location.state.sport}.png`}
            currPage="total"
            nextPage="/Animal"
            history={this.props.history}
          />
          <Image
            alt={`${this.props.history.location.state.emotion}`}
            icon={this.state.fourth}
            src={`${this.props.history.location.state.emotion}.png`}
            currPage="total"
            nextPage="/Animal"
            history={this.props.history}
          />
          <Image
            alt={`${this.props.history.location.state.transport}`}
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
