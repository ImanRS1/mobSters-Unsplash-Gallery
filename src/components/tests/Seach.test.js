import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Search from '../Search';

describe('Basic Search test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<BrowserRouter><Search /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});