import {render, screen} from '@testing-library/react';
import React from 'react';
import Question from '../client/src/components/questionsComponent/Question.jsx';


it("Should show question component heading", () => {
  render(<Question />);
  const heading = screen.getByTestId('question-header');
});