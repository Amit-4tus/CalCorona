import React, { Component } from 'react';
import MyForm from './myForm';

export default class calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <MyForm calculateResult={this.calculateResult}></MyForm>
            </div>
        );
    }

    calculateResult(userAge, userGender, userDiseases) {
        console.log('userAgr:', userAge, 'userGender:', userGender, 'userDiseases:', userDiseases);

        // 20 is a temporary constant that will be changed into a calculated number.
        let resultInPercent = 20;
        localStorage.setItem('resultInPercent', resultInPercent);
    }

    diseasesRateMap = {
        Diabetes: 0.092,
        Crdivsc: 0.132
    }
};