import React from 'react';

export default class Rating extends React.Component {
  constructor() {
    super();
  }
  
  handleRatingClick(rating) {
    console.log(this.props);
    this.props.onRatingClick(rating);
  }

  render() {
    const rating = this.props.rating;
    
    return (
      <ul>
        <li onClick={this.handleRatingClick.bind(this, 1)} className={(rating >= 1) ? 'rating-active' : null}>X</li>
        <li onClick={this.handleRatingClick.bind(this, 2)} className={(rating >= 2) ? 'rating-active' : null}>X</li>
        <li onClick={this.handleRatingClick.bind(this, 3)} className={(rating >= 3) ? 'rating-active' : null}>X</li>
        <li onClick={this.handleRatingClick.bind(this, 4)} className={(rating >= 4) ? 'rating-active' : null}>X</li>
        <li onClick={this.handleRatingClick.bind(this, 5)} className={(rating >= 5) ? 'rating-active' : null}>X</li>
      </ul>
    );
  }
}

Rating.propTypes = {};
