import React from 'react';
import ReactDOM from 'react-dom';
import PaginationButton from '../PaginationButton';

describe('Basic PaginationButton test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<PaginationButton />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});