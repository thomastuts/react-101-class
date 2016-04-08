import React from 'react';

const Rating = ({rating, onRatingClick}) => (
  <ul>
    <li onClick={onRatingClick.bind(undefined, 1)} className={(rating >= 1) ? 'rating-active' : null}>X</li>
    <li onClick={onRatingClick.bind(undefined, 2)} className={(rating >= 2) ? 'rating-active' : null}>X</li>
    <li onClick={onRatingClick.bind(undefined, 3)} className={(rating >= 3) ? 'rating-active' : null}>X</li>
    <li onClick={onRatingClick.bind(undefined, 4)} className={(rating >= 4) ? 'rating-active' : null}>X</li>
    <li onClick={onRatingClick.bind(undefined, 5)} className={(rating >= 5) ? 'rating-active' : null}>X</li>
  </ul>
);

Rating.propTypes = {};

export default Rating;
