import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from '../pages/Home';

test('should list cards with beginner level span text on it', () => {
  render(<Home />);
  const span = screen.getAllByText(/beginner/i);

  expect(span).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        textContent: 'beginner',
      }),
    ]),
  );
});

test('should list cards with advanced level span text on it', () => {
  render(<Home />);
  const span = screen.getAllByText(/advanced/i);

  expect(span).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        textContent: 'advanced',
      }),
    ]),
  );
});

test('should list cards with low impact span text on it', () => {
  render(<Home />);
  const span = screen.getAllByText(/low impact/i);

  expect(span).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        textContent: 'low impact',
      }),
    ]),
  );
});

test('should list cards with h3 element as title', () => {
  render(<Home />);
  const h3 = screen.getAllByRole('heading');
  expect(h3.length).toBeGreaterThan(0);
});
