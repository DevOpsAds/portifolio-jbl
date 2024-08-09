import React, { useState } from 'react';
import PropTypes from 'prop-types';

const DiscountCalculator = ({ basePrice, minDays, maxDays }) => {
  const [days, setDays] = useState(minDays);
  const [discount, setDiscount] = useState(0);

  const calculateDiscount = (days) => {
    const discountRate = 0.03; // Por exemplo, 5% de desconto por dia adicional
    const additionalDays = days - minDays;
    return Math.min(discountRate * additionalDays, 0.5); // Máximo de 50% de desconto
  };

  const handleDaysChange = (e) => {
    const newDays = parseInt(e.target.value, 10);
    setDays(newDays);
    const newDiscount = calculateDiscount(newDays);
    setDiscount(newDiscount);
  };

  const discountedPrice = basePrice * (1 - discount);

  return (
    <div>
      <h3>Calculadora de Desconto</h3>
      <p>Preço Base: R$ {basePrice.toFixed(2)}</p>
      <p>
        Quantidade de dias:
        <input 
          type="number" 
          value={days} 
          onChange={handleDaysChange} 
          min={minDays} 
          max={maxDays} 
        />
      </p>
      <p>Desconto: {discount * 100}%</p>
      <p>Preço com Desconto: R$ {discountedPrice.toFixed(2)}</p>
    </div>
  );
};

DiscountCalculator.propTypes = {
  basePrice: PropTypes.number.isRequired,
  minDays: PropTypes.number.isRequired,
  maxDays: PropTypes.number.isRequired,
};

export default DiscountCalculator;
