import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../Header';

describe('Basic Header test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    const input = 'carts';
    ReactDOM.render(<BrowserRouter><Header input={input}/></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  test('Header snapshot', () => {
    const input = 'carts';
    const HeaderComponent = renderer.create(<BrowserRouter><Header input={input}/></BrowserRouter>).toJSON();
    expect(HeaderComponent).toMatchSnapshot();
  })
});