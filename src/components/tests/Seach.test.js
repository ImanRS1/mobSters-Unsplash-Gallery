import React from 'react';
import ReactDOM from 'react-dom';
import Search from '../Search';

describe('Basic Search test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<Search />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});