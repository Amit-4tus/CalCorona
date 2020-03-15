import React, { Component } from 'react';

export default class results extends Component {
    safeZone = 5;
    resultInPercent = localStorage.getItem('resultInPercent');
    adtnlAdvice = (this.resultInPercent < this.safeZone) ?
        "Be thoughtful of those who aren't so lucky to have a strong immune system" :
        "Be careful and listen to your local authority's instructions"

    render() {
        return (
            <div>
                You Have a {this.resultInPercent}% chance of dying of Corona.
            <h3>{this.adtnlAdvice}</h3>
            </div>
        )
    }
};