import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import PaginationButton from '../PaginationButton';

describe('Basic PaginationButton test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<BrowserRouter><PaginationButton /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});