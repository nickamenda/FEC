import {render, screen} from '@testing-library/react';
import React from 'react';
import AddQuestionBar from '../client/src/components/questionsComponent/AddQuestionBar.jsx';


it("Should show question component heading", () => {
  render(<AddQuestionBar />);
  const heading = screen.getByTestId('more-questions-btn');
});