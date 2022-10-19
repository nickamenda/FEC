import {render, screen} from '@testing-library/react';
import React from 'react';
import Reviews from '../client/src/components/reviewComponent/Sorting.jsx';


it("Should show question component heading", () => {
  render(<Reviews />);
  const heading = screen.getByTestId('sorting');
});