import {render, screen} from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../client/src/components/questionsComponent/Question.jsx';
import axios from 'axios';

const dummyProduct = {
  "id": 66648,
  "campus": "hr-rfc",
  "name": "Blues Suede Shoes",
  "slogan": "2019 Stanley Cup Limited Edition",
  "description": "Touch down in the land of the Delta Blues in the middle of the pouring rain",
  "category": "Dress Shoes",
  "default_price": "120.00",
  "created_at": "2022-03-31T21:13:15.875Z",
  "updated_at": "2022-03-31T21:13:15.875Z"
}



describe('Question Component', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it("Should show question component heading", () => {
    render(<Question product={dummyProduct}/>);
    const heading = screen.getByTestId('question-header');
  });
})