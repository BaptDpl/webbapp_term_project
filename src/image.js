import React, { Component } from "react";
import "./App.css";

class Image extends Component {
  state = {
    color: "",
    food: "",
    sport: ""
  };

  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }
  handle = (e, data, currPage, nextPage) => {
    if ((currPage = "color")) {
      this.setState({ color: data });
    }
    if ((currPage = "food")) {
      this.setState({ food: data });
    }
    if ((currPage = "sport")) {
      this.setState({ sport: data });
    }
    console.log(this.state);
    this.props.history.push(nextPage);
  };

  render() {
    console.log(this.state);
    return (
      <img
        alt={this.props.alt}
        icon=""
        src={this.props.src}
        className="mb-3 mx-auto d-block"
        onClick={e =>
          this.handle(
            e,
            this.props.alt,
            this.props.currPage,
            this.props.nextPage
          )
        }
      />
    );
  }
}
export default Image;
