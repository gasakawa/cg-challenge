import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('should list a card with beginner text on it', () => {
  render(<Home />);
  const beginner = screen.getByText(/beginner/);
  expect(beginner).toBeInTheDocument();
});
