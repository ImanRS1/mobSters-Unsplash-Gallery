import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Footer from '../Footer';

describe('Basic Footer test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<BrowserRouter><Footer /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});