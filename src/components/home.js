import React, { Component } from 'react';
import Welcome from './welcome';
import Calculator from './calculator';

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
                <Calculator></Calculator>
            </div>
        )
    }
}