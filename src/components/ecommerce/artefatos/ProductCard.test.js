// src/components/ecommerce/ProductCard.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard'; // Ajuste o caminho conforme necessário

test('renders ProductCard component', () => {
  const product = {
    title: 'Produto Teste',
    price: 123.45,
    picture: 'http://example.com/image.jpg',
    condition: 'Novo',
    permalink: 'http://example.com'
  };

  render(<ProductCard product={product} />);
  
  expect(screen.getByText('Produto Teste')).toBeInTheDocument();
  expect(screen.getByText('R$123.45')).toBeInTheDocument();
  expect(screen.getByText('Novo')).toBeInTheDocument();
});
