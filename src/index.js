import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FibApp from './FibApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <FibApp />,
  document.getElementById('root')
);
registerServiceWorker();
