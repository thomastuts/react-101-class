import React from 'react';
import ReactDOM from 'react-dom';

import Map from './components/Map';

ReactDOM.render(
  <Map initialPosition={{lat: 48.858608, lng: 2.294471}} />,
  document.getElementById('root')
);
