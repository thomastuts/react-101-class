import React from 'react';

import {getBookData} from '../api/books.js';
import Rating from './Rating';

export default class BookDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      bookInfo: null
    };

    this.handleRating = this.handleRating.bind(this);
  }

  componentDidMount() {
    getBookData(this.props.routeParams.detail, (bookInfo) => {
      console.log('oh no');
      this.setState({
        bookInfo
      });
    });
  }

  handleRating(rating) {
    this.setState({
      bookInfo: Object.assign(this.state.bookInfo, {
        rating: rating
      })
    });
  }

  render() {
    if (!this.state.bookInfo) {
      return (
        <p>Loading...</p>
      );
    } else {
      return (
        <div>
          <h1>{this.state.bookInfo.title}</h1>
          <Rating rating={this.state.bookInfo.rating} onRatingClick={this.handleRating} />
          <img src={this.state.bookInfo.image} />
          <p>{this.state.bookInfo.description}</p>
        </div>
      );
    }
  }
}

BookDetail.propTypes = {};
