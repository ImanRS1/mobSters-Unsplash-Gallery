import React from 'react';
import ReactDOM from 'react-dom';
import Pagination from '../Pagination';

describe('Basic Pagination test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<Pagination />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});