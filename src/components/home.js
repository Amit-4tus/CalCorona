import React, { Component } from 'react';
import Welcome from './welcome';
import Calculator from './calculator';
import GoogleAd from './googleAd'

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isFinished: false,
        };
    }

    render() {
        return (
            <div className="home section">
                <Welcome></Welcome>
                <section className="main">
                    <Calculator></Calculator>
                    <GoogleAd></GoogleAd>
                </section>
            </div>
        )
    }
}