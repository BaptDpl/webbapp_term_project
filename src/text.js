import React, { Component } from "react";

class Text extends Component {
  render() {
    return (
      <h1 className="mt-5">
        <span className="text-info ">Choose </span>
        <span className="text-primary ">Your </span>
        <span className="text-danger ">Favorite </span>
        <span className="text-warning "> {this.props.text} </span>
      </h1>
    );
  }
}
export default Text;
