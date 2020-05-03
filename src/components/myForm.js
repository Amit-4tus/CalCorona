import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class calculator extends Component {
  render() {
    return (
      <form className="my-form">
        <h2>Calculate Your Odds of Surviving COVID19</h2>

        <h3 className="form-sect-header">Age</h3>

        <input
          type="number"
          id="ageInput"
          placeholder="0"
          title="Enter Your Age"
        ></input>
        <h6 className="invalid-age error hide">
          Please enter your real age or go to a prodigy program
        </h6>

        <h3 className="form-sect-header">Gender</h3>

        <section className="gender" title="Enter Your Gender">
          <label htmlFor="genderFemale">
            <input
              type="radio"
              name="gender"
              id="genderFemale"
              value="female"
              className="hide"
            ></input>
            <span className="gender-input-decoy input-decoy"></span>
            Female
          </label>
          <label htmlFor="genderMale">
            <input
              type="radio"
              name="gender"
              id="genderMale"
              value="male"
              className="hide"
            ></input>
            <span className="gender-input-decoy input-decoy"></span>
            Male
          </label>
        </section>
        <h6 className="no-selected-gender error hide">
          Please select your biological gender
        </h6>

        <h3 className="form-sect-header">Chronical Disease</h3>

        <section className="diseases-sect" title="Select Diseases">
          <label htmlFor="diabetes">
            <input
              type="checkbox"
              className="diseases hide"
              id="diabetes"
            ></input>
            <span className="disease-input-decoy input-decoy"></span>
            Diabetes
          </label>

          <label htmlFor="crdio">
            <input type="checkbox" className="diseases hide" id="crdio"></input>
            <span className="disease-input-decoy input-decoy"></span>
            Cardiovascular Disease
          </label>

          <label htmlFor="rsptry">
            <input
              type="checkbox"
              className="diseases hide"
              id="rsptry"
            ></input>
            <span className="disease-input-decoy input-decoy"></span>
            Chronic Respiratory Disease
          </label>

          <label htmlFor="tension">
            <input
              type="checkbox"
              className="diseases hide"
              id="tension"
            ></input>
            <span className="disease-input-decoy input-decoy"></span>
            Hypertension
          </label>

          <label htmlFor="cancer">
            <input
              type="checkbox"
              className="diseases hide"
              id="cancer"
            ></input>
            <span className="disease-input-decoy input-decoy"></span>
            Cancer
          </label>
        </section>

        <button
          className="get-results-btn btn"
          title="Get Results"
          onClick={() => this.getResults.call(this)}
        >
          Get results
        </button>
      </form>
    );
  }

  getResults() {
    window.event.preventDefault();

    let userAge = +document.querySelector("#ageInput").value;

    let genderRadio = document.getElementsByName("gender");
    let userGender;
    if (genderRadio[0].checked) {
      userGender = genderRadio[0].value;
    } else if (genderRadio[1].checked) {
      userGender = genderRadio[1].value;
    } else {
      this.showError("noSelectedGender");
      return;
    }

    let elDiseases = document.querySelectorAll(".diseases");
    // Converting from a nodeList to an array of strings
    let userDiseases = [];
    elDiseases.forEach((disease) => {
      if (disease.checked) {
        userDiseases.push(disease.id);
      }
    });
    if (!userDiseases.length) userDiseases.push("none");

    // Age validation
    if (this.checkAge(userAge)) {
      this.props.calculateResult(userAge, userGender, userDiseases);
      this.setUserInput(userAge, userGender, userDiseases);
      window.scrollTo(0, 0);
      this.showResults();
    }
  }

  checkAge(age) {
    if (age < 5) {
      this.showError("invalidAge");
    } else return true;
  }

  showError(type) {
    let elErrors = document.querySelectorAll(".error");
    elErrors.forEach((error) => error.classList.add("hide"));

    switch (type) {
      case "noSelectedGender":
        document.querySelector(".no-selected-gender").classList.remove("hide");
        break;
      case "invalidAge":
        document.querySelector(".invalid-age").classList.remove("hide");
        break;
    }
  }

  showResults() {
    this.props.history.push("/results");
  }

  setUserInput(userAge, userGender, userDiseases) {
    window.userAge = userAge;
    window.userGender = userGender;
    window.userDiseases = userDiseases;
  }

  doNothing() {}
}

export default withRouter(calculator);
