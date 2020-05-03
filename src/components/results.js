import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MainGoogleAd from "./mainGoogleAd";
import SecondGoogleAd from "./secondGoogleAd";
import ResultsFor from "./resultFor";

class results extends Component {
  constructor() {
    super();
    this.goBack = this.goBack.bind(this);
  }

  safeZone = 5;
  resultInPercent = localStorage.getItem("resultInPercent");
  adtnlAdvice =
    this.resultInPercent < this.safeZone
      ? "Be thoughtful of those who aren't so lucky to have a strong immune system"
      : "Be careful and listen to your local authority's instructions";

  render() {
    // Check the lighting mode
    this.type = window.lighting === "Light" ? "surviving the" : "dying of";
    this.result =
      this.resultInPercent < 90
        ? window.lighting === "Light"
          ? (100 - this.resultInPercent).toFixed(2)
          : this.resultInPercent
        : window.lighting === "Light"
        ? "low"
        : "high";

    if (this.resultInPercent < 90) {
      this.result = this.result.toString() + "%";
    }

    return (
      <div className="results container">
        <div className="results-sect muted">
          <h2 className="main-result">
            You Have a {this.result} chance of {this.type} COVID19.
          </h2>
          <h3 className="secondary-result">{this.adtnlAdvice}</h3>
          <button className="bk-btn btn" onClick={this.goBack}>
            Back
          </button>
        </div>
        <MainGoogleAd></MainGoogleAd>
        <SecondGoogleAd></SecondGoogleAd>
        <ResultsFor></ResultsFor>
      </div>
    );
  }

  goBack() {
    this.props.history.push("/");
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }
}

export default withRouter(results);
