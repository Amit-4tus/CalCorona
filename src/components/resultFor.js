import React, { Component } from "react";

export default class resultFor extends Component {
  constructor() {
    super();
    this.state = {
      userAge: window.userAge,
      userGender: window.userGender,
      userDiseaseCodes: window.userDiseases
    };
  }
  userDiseases = "";
  setUserDiseases() {
    if (
      this.state.userDiseaseCodes &&
      this.state.userDiseaseCodes[0] === "none"
    ) {
      this.userDiseases = "no chronical diseases";
    } else {
      for (let dssCode in this.state.userDiseaseCodes) {
        this.userDiseases += this.userDiseasesMap[
          this.state.userDiseaseCodes[dssCode]
        ];
        if (+dssCode !== this.state.userDiseaseCodes.length - 1) {
          this.userDiseases += ", ";
        }
      }
    }
  }
  render() {
    this.setUserDiseases();
    return (
      <div className="result-for muted">
        <h2>Showing results for:</h2>A {window.userAge} year old{" "}
        {window.userGender} with {this.userDiseases}
      </div>
    );
  }
  userDiseasesMap = {
    diabetes: "Diabetes",
    crdio: "Cardiovascular Disease",
    rsptry: "Chronic Respiratory Disease",
    tension: "Hypertension",
    cancer: "Cancer"
  };
}
