// src/components/negociation/WorkHoursCalculator.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import WorkHoursCalculator from './WorkHoursCalculator';

test('renders the WorkHoursCalculator component', () => {
  render(
    <WorkHoursCalculator 
      basePrice={100} 
      minDays={1} 
      maxDays={30} 
      totalWorkHours={40} // Adicione a prop obrigatória
    />
  );
  expect(screen.getByText(/Calculadora de Horas de Trabalho/i)).toBeInTheDocument();
});
