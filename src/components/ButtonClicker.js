import React from 'react';

/**
 * This is the Button Clicker exercise.
 * Codepen link: http://codepen.io/thomastuts/pen/zqwJVV?editors=1010
 *
 * Briefing
 * ----
 * This component has a button (the one that is already in the `render()` method down below). When
 * the button is clicked, it should call a method that is defined on the class (you are free to choose
 * the name of that method). When the method is called, it should log out a simple message
 * using `console.log()`.
 *
 * Hints
 * ----
 * Keep in mind that the `render()` method is also a method defined on the class. This means that
 * the method you're going to write to log out the message is constructed in the same way.
 *
 * You pass your event handlers to an element as a camel-cased prop. For a full list of events, see
 * https://facebook.github.io/react/docs/events.html#supported-events.
 */

export default class ButtonClicker extends React.Component {
  sayHello() {
    console.log('Hello, world! I have been clicked.');
  }

  render() {
    return (
      <div>
        <button onClick={this.sayHello}>Click me!</button>
      </div>
    );
  }
}
