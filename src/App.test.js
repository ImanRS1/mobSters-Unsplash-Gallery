import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

describe('Basic App test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
});
