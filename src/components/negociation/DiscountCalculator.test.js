import React from 'react';
import { render, screen } from '@testing-library/react';
import DiscountCalculator from './DiscountCalculator';

test('renders the DiscountCalculator component', () => {
  render(<DiscountCalculator basePrice={100} minDays={1} maxDays={30} />);
  const linkElement = screen.getByText(/Calculadora de Desconto/i);
  expect(linkElement).toBeInTheDocument();
});
