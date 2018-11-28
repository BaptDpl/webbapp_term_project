import React, { Component } from "react";
import "./App.css";
import Image from "./image";

class Animal extends Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.back = this.back.bind(this);
    this.state = {
      animal: "dot.png",
      icon: "animal",
      className: "invisible",
      button: "invisible",
      footer: "invisible",
      photographer: "Uknown"
    };
  }

  componentDidMount = () => {
    if (this.props.history.location.state === undefined) {
      this.props.history.push({
        pathname: "/ErrorPage"
      });
      return;
    }
    console.log(this.props.history.location.state.value);
    let url = `https://api.pexels.com/v1/search?query=animal+query&per_page=1&page=${
      this.props.history.location.state.value
    }`;

    var request = new Request(url, {
      method: "GET",
      mode: "cors",
      redirect: "follow",
      headers: new Headers({
        Authorization:
          "563492ad6f917000010000019bf062de7cea4e9885a9fb9628a55b87",

        "Content-Type": "text/plain"
      })
    });

    const that = this;

    fetch(request)
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        that.setState({ animal: myJson.photos[0].src.large }, () =>
          console.log(myJson.photos[0].src.large)
        );
        that.setState({ photographer: myJson.photos[0].photographer }, () =>
          console.log(myJson.photos[0].photographer)
        );
        that.setState({ className: "easeIn" });
      });

    setTimeout(() => {
      this.setState({
        button: "easeIn col-md-12 btn btn-secondary btn-lg mt-5"
      });
      this.setState({
        footer: "easeIn page-footer font-small blue"
      });
    }, 2000);
  };

  back = e => {
    this.props.history.push({
      pathname: "/"
    });
  };

  render() {
    return (
      <div className="">
        <div className="d-flex justify-content-center align-items-center">
          <Image
            alt="animal"
            value={5}
            class={this.state.className}
            src={this.state.animal}
            icon={this.state.icon}
            currPage="color"
            nextPage="/Food"
            history={this.props.history}
          />
        </div>
        <button
          type="button"
          className={this.state.button}
          onClick={e => this.back(e)}
        >
          Try Again !
        </button>

        <footer className={this.state.footer}>
          <div className="footer-copyright text-center py-3">
            API Credit:
            <a className="mr-5" href=" https://www.pexels.com/">
              {" "}
              Pexels
            </a>
            Artist Credit:{" "}
            <span className="text-primary">{this.state.photographer}</span>
          </div>
        </footer>
      </div>
    );
  }
}
export default Animal;
