import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Pagination from '../Pagination';

describe('Basic Pagination test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<BrowserRouter><Pagination /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});