import React from 'react';

/**
 * This is the Color Button Clicker exercise.
 *
 * Briefing
 * ----
 * This exercise is similar to the Button Clicker exercise, except that it is a little more advanced.
 * The ColorButtonClicker takes in an array of colors as a prop, and then renders a button for every
 * color present in that array (be sure to pick HTML colors like `gold`, `red`, hex values or rgb
 * values). When that button is clicked, a console message should log out the color of the button
 * that was clicked.
 *
 * Hints
 * ----
 * Be sure to check out the exercise and solution for the Button Clicker exercise if you haven't
 * completed that yet. If you are going to use a method in the component spec to log out the color,
 * be sure to check out https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_objects/Function/bind
 * for help on how to pass in the argument. Keep in mind that you will not be executing the function
 * when adding the event listener to an element, but rather passing in the function reference.
 */

export default class ColorButtonClicker extends React.Component {
  handleButtonClick(color) {
    console.log('You have clicked the ' + color + ' button!');
  }

  render() {
    /**
     * Transform the array of colors into an array of <button> elements that have a background style,
     * a key and an event handler. We store this in a separate variable to keep our render method
     * nice and clean.
     */
    const buttons = this.props.colors.map(color => (
      <button key={color} style={{backgroundColor: color}} onClick={this.handleButtonClick.bind(this, color)}>{color}</button>
    ));

    return (
      <div>
        {buttons}
      </div>
    );
  }
}

/**
 * We want an array of strings to be passed in for our colors.
 */
ColorButtonClicker.propTypes = {
  colors: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};
