import React, { Component } from "react";
import Welcome from "./welcome";
import Calculator from "./calculator";
import GoogleAd from "./mainGoogleAd";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFinished: false
    };
  }

  render() {
    return (
      <div className="home container">
        <Welcome></Welcome>
        <section className="main">
          <Calculator></Calculator>
          <GoogleAd></GoogleAd>
        </section>
      </div>
    );
  }
}
