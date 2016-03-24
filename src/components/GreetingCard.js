import React from 'react';

export default class GreetingCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const greetingsPerLanguage = {
      EN: 'Hello, my name is ' + this.props.name + '!',
      NL: 'Hallo, mijn naam is ' + this.props.name + '!'
    };

    return (
      <p>{greetingsPerLanguage[this.props.language]}</p>
    );
  }
}

GreetingCard.propTypes = {
  name: React.PropTypes.string.isRequired,
  language: React.PropTypes.string
};

GreetingCard.defaultProps = {
  language: 'EN'
};
