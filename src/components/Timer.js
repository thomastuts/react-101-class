import React from 'react';

/**
 * This is the Timr exercise.
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
  render() {
    return (
      <p>I have been running for 0 seconds.</p>
    );
  }
}
