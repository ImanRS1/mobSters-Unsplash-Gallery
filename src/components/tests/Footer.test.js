import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../Footer';

describe('Basic Footer test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<Footer />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});