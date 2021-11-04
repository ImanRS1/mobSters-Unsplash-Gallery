import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import App from './App';

describe('Basic App test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  test('App snapshot', () => {
    const AppComponent = renderer.create(<App />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });
});


