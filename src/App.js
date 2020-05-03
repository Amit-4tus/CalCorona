import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/home";
import Result from "./components/results";
import Info from "./components/info";
import MyFooter from "./components/myFooter";

export default class App extends Component {
  constructor() {
    super();
    this.state = { isDark: false };
    this.switchLightingMode = this.switchLightingMode.bind(this);
    window.lighting = "Light";
  }

  componentDidMount() {
    document.title = "Cal-Corona";
  }

  render() {
    this.getFromCLSite();
    return (
      <div className="app">
        <Router basename={process.env.PUBLIC_URL}>
          <header>
            <span className="header-logo logo" title="Cal-Corona">
              <span className="brand">Cal-Corona</span>
              <span className="tag-line">Will I Die Of COVID19?</span>
            </span>
            <button
              className="mode-btn"
              title="Change Lighting"
              onClick={() =>
                this.switchLightingMode(
                  document.querySelector(".change-to-lighting").innerText
                )
              }
            >
              <div className="mode-btn-handle"></div>
              <span className="change-to-lighting hide">Dark</span>
            </button>
          </header>
          <div className="header-place-holder"></div>
          <Route exact path="/" render={() => <Home></Home>} />
          <Route exact path="/results" render={() => <Result></Result>} />
          <Info></Info>
          <MyFooter></MyFooter>
        </Router>
      </div>
    );
  }

  switchLightingMode(type) {
    this.setState(() => {
      return { isDark: !this.state.isDark };
    });
    document.querySelector("body").classList.toggle("dark");
    if (type === "Light") {
      window.lighting = "Light";
      document.querySelector(".change-to-lighting").innerText = "Dark";
    } else if (type === "Dark") {
      window.lighting = "Dark";
      document.querySelector(".change-to-lighting").innerText = "Light";
    }
  }

  getFromCLSite() {}
}
