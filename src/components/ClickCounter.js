import React from 'react';

/**
 * This is the Click Counter exercise.
 *
 * Briefing
 * ----
 * This component has a button and a small text that tells the user how many times the button has
 * been pressed. Every time the button is pressed, the state counter should be incremented by 1.
 *
 * Hints
 * ----
 * Be sure to define the initial state in the constructor by setting `this.state`.
 */

export default class ButtonClicker extends React.Component {
  render() {
    return (
      <div>
        <button>Click me!</button>
        <p>I have been clicked 0 times.</p>
      </div>
    );
  }
}
