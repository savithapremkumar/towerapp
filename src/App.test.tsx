import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders register card form', () => {
  render(<App />);
  const formElement = screen.getByRole(/registerForm/i);
  expect(formElement).toBeInTheDocument();
});