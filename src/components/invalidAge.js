import React, { Component } from 'react';

export default class invalidAge extends Component {
    render() {
        return (
            <div className="invalid-age">
                You can't be younger than 5. please enter your real age or go to a prodigy program.
            </div>
        );
    }
};