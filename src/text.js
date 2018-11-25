import React, { Component } from "react";

class Text extends Component {
  render() {
    return (
      <h1 className={this.props.class || "mt-5"}>
        <span className="text-info "> {this.props.text1 || "Choose "} </span>
        <span className="text-primary ">{this.props.text2 || "Your "} </span>
        <span className="text-danger ">{this.props.text3} </span>
        <span className="text-warning "> {this.props.text4} </span>
        <span className="text-success "> {this.props.text5 || ""} </span>
      </h1>
    );
  }
}
export default Text;
