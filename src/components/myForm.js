import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

class calculator extends Component {
    render() {
        return (
            <form className="my-form" >
                <h3>Age</h3>

                <input type="number" id="ageInput" placeholder="0"></input>

                <h3>Gender</h3>

                <section className="gender">
                    <label htmlFor="genderFemale"><input type="radio" name="gender" id="genderFemale" value="female" checked onChange={this.doNothing}></input>Female</label>
                    <label htmlFor="genderMale"><input type="radio" name="gender" id="genderMale" value="male"></input>Male</label>
                </section>

                <h3>Chronical Disease</h3>

                <select id="diseases">
                    <option>None</option>
                    <option>Diabetes</option>
                    <option>Cardiovascular Disease</option>
                </select>

                <button onClick={() => this.getResults.call(this)}>Get results</button>
            </form>
        )
    }

    getResults() {
        window.event.preventDefault();

        let userAge = +document.querySelector('#ageInput').value;
        let genderRadio = document.getElementsByName('gender');
        let userGender = (genderRadio[0].checked) ?
            genderRadio[0].value :
            genderRadio[1].value;
        let userDiseases = document.querySelector('#diseases').value;

        if (userAge < 5) {
            this.showError('tooYoung');
        } else {
            this.props.calculateResult(userAge, userGender, userDiseases);
            this.showResults();
        }
    }

    showError(type) {
        if (type === 'tooYoung') {
            this.props.history.push("/invalid-age");
        }
    }

    showResults() {
        this.props.history.push("/results");
    }

    doNothing() { };
};

export default withRouter(calculator);