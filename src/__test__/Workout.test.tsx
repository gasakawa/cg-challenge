import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkoutDetail from '../components/WorkoutDetail';
import { BrowserRouter } from 'react-router-dom';

test('should render a h1  and h3', () => {
  render(
    <BrowserRouter>
      <WorkoutDetail id='1' />
    </BrowserRouter>,
  );
  const heading = screen.getAllByRole('heading');
  expect(heading.length).toBe(2);
});

test('should render span element with level', () => {
  render(
    <BrowserRouter>
      <WorkoutDetail id='1' />
    </BrowserRouter>,
  );
  const span = screen.getByText(/beginner/i);
  expect(span.textContent).toBe('beginner');
});
