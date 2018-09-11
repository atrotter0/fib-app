import React from 'react';
import ReactDOM from 'react-dom';
import FibApp from './components/FibApp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FibApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
