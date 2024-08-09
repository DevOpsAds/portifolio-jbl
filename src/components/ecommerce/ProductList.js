import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProductCard from './artefatos/ProductCard'; // Importando o componente ProductCard
import './ProductList.css'; // Importando o arquivo CSS

const fetchProducts = async (query) => {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Fetch error:', error);
    return [];
  }
};

const ProductList = ({ searchQuery }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      const products = await fetchProducts(searchQuery);
      setProducts(products);
    };

    loadProducts();
  }, [searchQuery]);

  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

ProductList.propTypes = {
  searchQuery: PropTypes.string.isRequired,
};

export default ProductList;
