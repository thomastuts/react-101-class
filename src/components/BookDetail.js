import React from 'react';

const BookDetail = (props) => {
  return (
    <div>
      Book details for: {props.routeParams.detail}
    </div>
  )
};

BookDetail.propTypes = {};

export default BookDetail;
