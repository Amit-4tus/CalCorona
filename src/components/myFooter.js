import React, { Component } from "react";

export default class calculator extends Component {
  render() {
    return (
      <div className="my-footer">
        <div className="container">
          Based on statistics published by The World Health Organization, this
          website was built by Amit Fortus.
          <br></br>
          The initial idea for this website and the calculation algorithm was
          done by Roee Factor.
          <br></br>
          It is important for us to emphasize that this site is for fun purposes
          only. Do not take any of it as medical advice. We are not responsible
          for any harmful outcome.
          <span className="footer-logo logo">
            <span className="brand">Cal-Corona</span>
            <span className="tag-line">Will I Die Of COVID19?</span>
          </span>
        </div>
      </div>
    );
  }
}
