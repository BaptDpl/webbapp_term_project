import React, { Component } from "react";
import "./App.css";

class Image extends Component {
  constructor(props) {
    super(props);
    this.handle = this.handle.bind(this);
    this.state = { error: null };
  }

  handle = (e, data, value, currPage, nextPage, animal) => {
    if (currPage === "error") {
      this.props.history.push({
        pathname: nextPage
      });
    }
    if (currPage === "color") {
      console.log(this.props.history.location.state);
      this.props.history.push({
        pathname: nextPage,
        state: {
          color: data,
          value: value,
          animalCount: [animal]
        }
      });
    }
    if (currPage === "food") {
      if (this.props.history.location.state === undefined) {
        this.props.history.push({
          pathname: "/ErrorPage"
        });
        return;
      }
      console.log(this.props.history.location.state);
      this.props.history.push({
        pathname: nextPage,
        state: {
          color: this.props.history.location.state.color,
          food: data,
          value: this.props.history.location.state.value + value,
          animalCount: [
            ...this.props.history.location.state.animalCount,
            animal
          ]
        }
      });
    }
    if (currPage === "sport") {
      if (this.props.history.location.state === undefined) {
        this.props.history.push({
          pathname: "/ErrorPage"
        });
        return;
      }
      console.log(this.props.history.location.state);
      this.props.history.push({
        pathname: nextPage,
        state: {
          color: this.props.history.location.state.color,
          food: this.props.history.location.state.food,
          sport: data,
          value: this.props.history.location.state.value + value,
          animalCount: [
            ...this.props.history.location.state.animalCount,
            animal
          ]
        }
      });
    }
    if (currPage === "emotion") {
      if (this.props.history.location.state === undefined) {
        this.props.history.push({
          pathname: "/ErrorPage"
        });
        return;
      }
      console.log(this.props.history.location.state);
      this.props.history.push({
        pathname: nextPage,
        state: {
          color: this.props.history.location.state.color,
          food: this.props.history.location.state.food,
          sport: this.props.history.location.state.sport,
          emotion: data,
          value: this.props.history.location.state.value + value,
          animalCount: [
            ...this.props.history.location.state.animalCount,
            animal
          ]
        }
      });
    }
    if (currPage === "transport") {
      if (this.props.history.location.state === undefined) {
        this.props.history.push({
          pathname: "/ErrorPage"
        });
        return;
      }
      console.log(this.props.history.location.state);
      this.props.history.push({
        pathname: nextPage,
        state: {
          color: this.props.history.location.state.color,
          food: this.props.history.location.state.food,
          sport: this.props.history.location.state.sport,
          emotion: this.props.history.location.state.emotion,
          transport: data,
          value: this.props.history.location.state.value + value,
          animalCount: [
            ...this.props.history.location.state.animalCount,
            animal
          ]
        }
      });
    }
  };

  render() {
    return (
      <img
        alt={this.props.alt}
        icon={this.props.icon || "choices"}
        src={this.props.src}
        value={this.props.value}
        className={this.props.class || "mb-3 mx-auto d-block"}
        onClick={e =>
          this.handle(
            e,
            this.props.alt,
            this.props.value,
            this.props.currPage,
            this.props.nextPage,
            this.props.animal
          )
        }
      />
    );
  }
}

export default Image;
