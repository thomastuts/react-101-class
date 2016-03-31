import React from 'react';

/**
 * This is the Timer exercise.
 *
 * Briefing
 * ----
 * This component displays the time in seconds that have passed since the component has been mounted.
 * The timer should be updated every second.
 *
 * Hints
 * ----
 * Use lifecycle methods for starting the timer when the component has been mounted. Make sure to
 * clean up after yourself! Cancel the interval when the component has been unmounted.
 */

export default class Timer extends React.Component {
  constructor() {
    super();

    this.state = {
      secondsSinceMount: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({
        secondsSinceMount: this.state.secondsSinceMount + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <p>I have been running for {this.state.secondsSinceMount} seconds.</p>
    );
  }
}
