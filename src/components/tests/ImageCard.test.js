import React from 'react';
import ReactDOM from 'react-dom';
import ImageCard from '../ImageCard';

describe('Basic ImageCard test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<ImageCard />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});