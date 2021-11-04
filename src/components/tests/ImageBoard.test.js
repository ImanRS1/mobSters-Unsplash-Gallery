import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import ImageBoard from '../ImageBoard';
import renderer from 'react-test-renderer';

const data = [
  {
    "urls": {"small": "https://picsum.photos/id/237/200/300"},
    "user": {"name": "Mariana"},
    "alt_description": "Hello",
    "id": "1"
  },
  {
    "urls": {"small": "https://picsum.photos/id/237/200/300"},
    "user": {"name": "Mariana"},
    "alt_description": "Hello",
    "id": "2"
  } 
  ];

describe('Basic ImageBoard test', () => {
  const div = document.createElement('div');

  test('Renders', () => {
    ReactDOM.render(<BrowserRouter><ImageBoard data={data} /></BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  })
  test('Images render correctly', () => {
    const imageBoardComponent = renderer.create(<BrowserRouter><ImageBoard data={data} /></BrowserRouter>).toJSON();
    expect(imageBoardComponent).toMatchSnapshot();
  })
  test('Correct number of rendered images', () => {
    ReactDOM.render(<BrowserRouter><ImageBoard data={data} /></BrowserRouter>, div);
    expect(div.children[0].children.length).toBe(data.length);
  });
});
