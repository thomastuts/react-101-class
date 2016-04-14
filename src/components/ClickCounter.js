import React from 'react';

export default class ButtonClicker extends React.Component {
  constructor() {
    super();

    this.state = {
      timesClicked: 0,
    };
  }

  handleButtonClick() {
    this.setState({
      timesClicked: this.state.timesClicked + 1
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleButtonClick.bind(this)}>Click me!</button>
        <p>I have been clicked <span className="timer-clicked-count">{this.state.timesClicked}</span> times.</p>
      </div>
    );
  }
}
