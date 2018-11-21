import React, { Component } from "react";
import "./App.css";

class Image extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
  }
  handle = (e, data, currPage, nextPage) => {
    if (currPage === "color") {
      console.log(this.props.history);
      //this.props.history.push(nextPage, { color: data });
      this.props.history.push({
        pathname: nextPage,
        state: { color: data }
      });
    }
    if (currPage === "food") {
      //this.props.history.push(nextPage, { food: data });
      console.log(this.props.history);
      let color = this.props.history.location.state.color;
      this.props.history.push({
        pathname: nextPage,
        state: {
          color: color,
          food: data
        }
      });
    }
    if (currPage === "sport") {
      console.log(this.props.history);
      let color = this.props.history.location.state.color;
      let food = this.props.history.location.state.food;
      this.props.history.push({
        pathname: nextPage,
        state: {
          color: color,
          food: food,
          sport: data
        }
      });
    }
  };

  render() {
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
