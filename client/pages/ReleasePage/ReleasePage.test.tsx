import { render, screen } from '@testing-library/react';
import ReleasePage from './ReleasePage';
import React from 'react';

test('it has an input and a button', () => {
  render(<ReleasePage />);

  const input = screen.getByRole('textbox', { name: /discogs release number/i });
  const button = screen.getByRole('button');

  expect(input).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});