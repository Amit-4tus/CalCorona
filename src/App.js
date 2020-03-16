import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/home';
import Result from './components/results';
import InvalidAge from './components/invalidAge';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Router basename={process.env.PUBLIC_URL}>
        {/* <Router history={history} basename={process.env.PUBLIC_URL}> */}
          <header>logo</header>
          <Route exact path="/" render={() => <Home></Home>} />
          <Route exact path="/results" render={() => <Result></Result>} />
          <Route exact path="/invalid-age" render={() => <InvalidAge></InvalidAge>} />
          <footer>
            This site was created by Amit Fortus with the help of Roee Factor.
            It is for fun only. Do not take any of it as medical advice. We are not responsible for any harmful outcome.
            logo
          </footer>
        </Router>
      </div>
    );
  }
}