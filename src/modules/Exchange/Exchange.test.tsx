import React from 'react';
import { render, screen } from '@testing-library/react';
import Exchange from './Exchange';

test('renders our components header', () => {
  render(<Exchange />);
  const element = screen.getByText(/Click To Select A Currency/i);
  expect(element).toBeInTheDocument();
});
