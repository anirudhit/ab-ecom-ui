import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EaB home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/EaB/i);
  expect(linkElement).toBeInTheDocument();
});
