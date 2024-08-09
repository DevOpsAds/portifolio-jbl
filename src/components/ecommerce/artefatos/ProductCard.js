import React from 'react';
import PropTypes from 'prop-types';
import './ProductCard.css'; // Importando o arquivo CSS

const ProductCard = ({ product }) => {
  const { title, price, thumbnail, condition, permalink } = product;

  return (
    <div className="product-card">
      <a href={permalink} target="_blank" rel="noopener noreferrer">
        <img src={thumbnail} alt={title} className="product-image" />
        <div className="product-details">
          <h3 className="product-title">{title}</h3>
          <p className="product-price">R${price.toFixed(2)}</p>
          <p className="product-condition">{condition}</p>
        </div>
      </a>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    thumbnail: PropTypes.string.isRequired,  // Certifique-se de que isso está presente
    condition: PropTypes.string.isRequired,
    permalink: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;