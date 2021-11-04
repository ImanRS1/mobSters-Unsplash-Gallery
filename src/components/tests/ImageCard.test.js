import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ImageCard from '../ImageCard';

describe('Basic ImageCard test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<BrowserRouter><ImageCard /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});