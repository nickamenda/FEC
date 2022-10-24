import {render, screen} from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import Question from '../client/src/components/questionsComponent/Question.jsx';



describe('MyComponent', () => {
  beforeAll(() => {
    ReactDOM.createPortal = jest.fn((element, node) => {
      return element;
    });
  });

  afterEach(() => {
    ReactDOM.createPortal.mockClear();
  });

  it("Should show question component heading", () => {
    render(<Question />);
    const heading = screen.getByTestId('question-header');
  });
})