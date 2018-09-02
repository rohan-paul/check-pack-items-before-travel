import React, { Component } from 'react';
import calculateTimeLeft from '../lib/calculate-time-left'
import './CountDown.css'


class Countdown extends Component {

    constructor(props) {
        super(props);
        this.state = {
            timeLeft: calculateTimeLeft()
         };
    }

    componentDidMount() {
        this.countDownInterval = setInterval(() => {
            this.setState({ timeLeft:  calculateTimeLeft() })
        }, 500)
    }

    componentWillMount() {
        clearInterval(this.countDownInterval)
    }

    render() {
        const { timeLeft } = this.state;
        return (
            <div className="CountDown">
                The Uber will be here in about {timeLeft}
            </div>
        );
    }
}

export default Countdown;

/*
https://www.w3schools.com/jsref/met_win_setinterval.asp

The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds).

The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.

The return value from setInterval() is an intervalID which is a numeric, non-zero value which uniquely identifies the timer created by the call to setInterval(); this value can be passed to WindowOrWorkerGlobalScope.clearInterval() to cancel the timeout.

The ID value returned by setInterval() is used as the parameter for the clearInterval() method.

*/