import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinStars, faFrown, faCheckCircle, faTachometerAlt, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import './OutBalon.css';

// Função para gerar uma posição aleatória
const getRandomPosition = () => {
  let top;
  do {
    top = Math.random() * 100;
  } while ((top > 24 && top < 60) || top > 84);

  const left = Math.random() * 77; // Valor entre 0% e 77%
  return { top: `${top}%`, left: `${left}%` };
};

// Mapeamento de ícones para opiniões
const opinionIcons = {
  satisfaction: faGrinStars,        // Sentiment very satisfied
  dissatisfaction: faFrown,         // Sentiment very dissatisfied
  excellent: faCheckCircle,         // Completed Task
  good: faTachometerAlt,            // Scoreboard
  fair: faUserNinja,                 // User Ninja
};

const OutBalon = ({ username, message, opinion }) => {
  const [position, setPosition] = useState({});

  useEffect(() => {
    setPosition(getRandomPosition()); // Atualiza a posição ao renderizar
  }, []);

  // Define a cor do ícone com base na opinião
  const iconColor = {
    satisfaction: 'green',
    dissatisfaction: 'red',
    excellent: 'blue',
    good: 'orange',
    fair: 'gray',
  }[opinion] || 'black';

  return (
    <div className="out-balon" style={position}>
      <div className="message-container">
        <div className="message">
          {message}
        </div>
        <div className="opinion-icon">
          <FontAwesomeIcon
            icon={opinionIcons[opinion]}
            style={{ color: iconColor }}
          />
        </div>
      </div>
      <div className="username-container">
        <div className="username">
          {username}
        </div>
      </div>
    </div>
  );
};

OutBalon.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  opinion: PropTypes.oneOf(['satisfaction', 'dissatisfaction', 'excellent', 'good', 'fair']).isRequired,
};

export default OutBalon;
