var React = require('react');
var ReactDOM = require('react-dom');

/**
 * This is the Greeting Card exercise that will be refactored in several iterations.
 * Codepen link: http://codepen.io/thomastuts/pen/zqwJVV?editors=1010
 *
 * Iteration 1
 * ----
 * Fill in the `render()` method to return an HTML `p` tag using JSX that says 'Hello,
 * my name is <the name passed in>'. Using `this.props`, pass in the `name` prop to the component
 * so you can dynamically render GreetingCard components with different names. Tip: make sure to add
 * your prop to the component when rendering it using `ReactDOM.render()`!
 *
 * Iteration 2
 * ----
 * Validate the `name` prop to make sure that it is a string. Make sure it is required, since you
 * need the name to complete your greeting. Use React's `propTypes` for this.
 *
 * Iteration 3
 * ----
 * Add support for multiple languages. The language that will be used will be defined using the
 * `language` prop. Make it default to English if the language prop is omitted with getDefaultProps().
 */

var GreetingCard = React.createClass({
  render: function () {
    // Add your render logic here
  }
});

ReactDOM.render(
  <GreetingCard />,
  document.getElementById('root')
);
