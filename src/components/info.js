import React, { Component } from "react";

export default class Info extends Component {
  render() {
    return (
      <div className="info-page closed">
        <h3>About:</h3>
        <p>
          Based on statistics published by The World Health Organization, this
          website was built by Amit Fortus. <a href="https://github.com/Amit-4tus/CalCorona">Code on GitHub can be found Here.</a>
          <br></br>
          The initial idea for this website and the calculation algorithm was
          done by Roee Factor.
          <br></br>
          It is important for us to emphasize that this site is for fun purposes
          only. Do not take any of it as medical advice. We are not responsible
          for any harmful outcome.
        </p>

        <h4>Contact:</h4>
        <section className="4tus">
          <h1>
            <span>Amit Fortus - </span>
            Full-stack web developer
          </h1>
          <a className="email" href="mailto:amit.fortus4@gmail.com">
            amit.fortus4@gmail.com
          </a>
          <span className="phone">+972-528024121</span>
          <a href="https://www.linkedin.com/in/amit-4tus-5a2656199/">
            LinkedIn
          </a>
        </section>

        <section className="factor">
          <h1>
            <span>Roee Factor - </span>
            Entrepreneur and frontman-vocalist
          </h1>
          <a className="email" href="mailto:factorroee@gmail.com">
            factorroee@gmail.com
          </a>
          <span className="phone">+972-545424339</span>
        </section>

        <button
          className="info-btn closed btn"
          onClick={() => this.toggleInfo()}
          title="Info"
        ></button>
      </div>
    );
  }

  toggleInfo() {
    const infoPage = document.querySelector(".info-page");
    const infoBtn = document.querySelector(".info-btn");
    console.log(infoBtn.classList.contains("closed"));
    console.log(infoBtn.classList.contains("open"));
    if (infoBtn.classList.contains("closed")) {
      infoBtn.classList.remove("closed");
      infoPage.classList.remove("closed");
      infoBtn.classList.add("open");
      infoPage.classList.add("open");
      infoBtn.title = "Close Info";
    } else if (infoBtn.classList.contains("open")) {
      infoBtn.classList.remove("open");
      infoPage.classList.remove("open");
      infoBtn.classList.add("closed");
      infoPage.classList.add("closed");
      infoBtn.title = "Info";
    }
  }
}
