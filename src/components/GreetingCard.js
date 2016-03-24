import React from 'react';

export default class GreetingCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {name, language} = this.props;
    const greetingsPerLanguage = {
      EN: `Hello, my name is ${name}!`,
      NL: `Hallo, mijn naam is ${name}!`
    };

    return (
      <p>{greetingsPerLanguage[language]}</p>
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
