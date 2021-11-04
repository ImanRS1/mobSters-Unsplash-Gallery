import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import App from './App';

describe('Basic App test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  test('App snapshot', () => {
    const AppComponent = renderer.create(<BrowserRouter><App /></BrowserRouter>).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });
});


