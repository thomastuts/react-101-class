import React from 'react';

import {getBookData} from '../api/books.js';

export default class BookDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      bookInfo: null
    };
  }

  componentDidMount() {
    getBookData(this.props.routeParams.detail, (bookInfo) => {
      console.log('oh no');
      this.setState({
        bookInfo
      });
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
          <img src={this.state.bookInfo.image} />
          <p>{this.state.bookInfo.description}</p>
        </div>
      );
    }
  }
}

BookDetail.propTypes = {};
