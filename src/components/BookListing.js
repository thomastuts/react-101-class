import React from 'react';

import {Link} from 'react-router';

const BookListing = () => {

  const books = [
    'harry-potter',
    '50-shades'
  ];

  const bookItemsForList = books.map(book => (
    <li key={book}>
      <Link to={`books/${book}`}>{book}</Link>
    </li>
  ));

  return (
    <div>
      <p>Peruse our book collection at your leisure.</p>
      <ul>
        {bookItemsForList}
      </ul>
    </div>
  );
};

BookListing.propTypes = {};

export default BookListing;
