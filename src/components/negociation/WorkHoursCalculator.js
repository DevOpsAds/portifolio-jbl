import React, { useState } from 'react';
import PropTypes from 'prop-types';
const formatHours = (dailyHours) => {
  const hours = Math.floor(dailyHours);
  const minutes = Math.round((dailyHours - hours) * 60);
  return `${hours}h ${minutes}m`;
};

const WorkHoursCalculator = ({ totalWorkHours, minDays, maxDays }) => {
  const [days, setDays] = useState(minDays);
  const [dailyHours, setDailyHours] = useState(totalWorkHours / minDays);
  

  const handleDaysChange = (e) => {
    const newDays = parseInt(e.target.value, 10);
    setDays(newDays);
    setDailyHours(totalWorkHours / newDays);
  };

  return (
    <div>
      <h3>Calculadora de Horas de Trabalho Diárias</h3>
      
      <p>Total de Horas de Trabalho: {totalWorkHours} horas</p>
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
      <p>Horas de Trabalho Diárias: {formatHours(dailyHours)} horas</p>
    </div>
  );
};

WorkHoursCalculator.propTypes = {
  totalWorkHours: PropTypes.number.isRequired,
  minDays: PropTypes.number.isRequired,
  maxDays: PropTypes.number.isRequired,
};

export default WorkHoursCalculator;
