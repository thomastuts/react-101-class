import React from 'react';
import ReactDOM from 'react-dom';

import catalogue from './data/catalogue';
import Supermarket from './components/Supermarket';

ReactDOM.render(
  <Supermarket catalogue={catalogue} />,
  document.getElementById('root')
);
