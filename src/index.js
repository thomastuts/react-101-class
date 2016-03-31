import React from 'react';
import ReactDOM from 'react-dom';

import ColorButtonClicker from './components/ColorButtonClicker';

ReactDOM.render(
  <ColorButtonClicker colors={['red', '#0F0', 'rgb(0,0,255)']} />,
  document.getElementById('root')
);
