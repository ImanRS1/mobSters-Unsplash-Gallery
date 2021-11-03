import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';

describe('Basic Header test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});