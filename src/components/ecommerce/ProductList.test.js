import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from './ProductList';

// Mock da função fetch
beforeEach(() => {
    globalThis.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          results: [
            {
              id: '1',
              title: 'Produto 1',
              price: 100.00,
              picture: 'http://example.com/image1.jpg',
              condition: 'Novo',
              permalink: 'http://example.com/product1'
            },
            {
              id: '2',
              title: 'Produto 2',
              price: 200.00,
              picture: 'http://example.com/image2.jpg',
              condition: 'Usado',
              permalink: 'http://example.com/product2'
            }
          ]
        }),
      })
    );
  });
  

describe('ProductList', () => {
  test('fetches and displays products', async () => {
    render(<ProductList searchQuery="test" />);

    // Espera os produtos serem carregados e renderizados
    await waitFor(() => {
      expect(screen.getByText('Produto 1')).toBeInTheDocument();
      expect(screen.getByText('Produto 2')).toBeInTheDocument();
    });
  });

  test('displays product details correctly', async () => {
    render(<ProductList searchQuery="test" />);

    await waitFor(() => {
      expect(screen.getByText('Produto 1')).toBeInTheDocument();
      expect(screen.getByText('R$100.00')).toBeInTheDocument();
      expect(screen.getByText('Novo')).toBeInTheDocument();
      
      expect(screen.getByText('Produto 2')).toBeInTheDocument();
      expect(screen.getByText('R$200.00')).toBeInTheDocument();
      expect(screen.getByText('Usado')).toBeInTheDocument();
    });
  });
});
