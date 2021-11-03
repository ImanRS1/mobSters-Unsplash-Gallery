import React from 'react';
import ReactDOM from 'react-dom';
import ImageBoard from '../ImageBoard';

describe('Basic ImageBoard test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<ImageBoard />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});