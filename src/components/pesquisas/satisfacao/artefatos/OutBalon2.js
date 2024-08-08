import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinStars, faFrown, faCheckCircle, faTachometerAlt, faUserNinja } from '@fortawesome/free-solid-svg-icons';
import './OutBalon.css';

// Mapeamento de ícones para opiniões
const opinionIcons = {
  satisfaction: faGrinStars,        // Sentiment very satisfied
  dissatisfaction: faFrown,         // Sentiment very dissatisfied
  excellent: faCheckCircle,         // Completed Task
  good: faTachometerAlt,            // Scoreboard
  fair: faUserNinja,                 // User Ninja
};

const OutBalon2 = ({ username, message, opinion, style }) => {
  // Define a cor do ícone com base na opinião
  const iconColor = {
    satisfaction: 'green',
    dissatisfaction: 'red',
    excellent: 'blue',
    good: 'orange',
    fair: 'gray',
  }[opinion] || 'black';

  return (
    <div className="out-balon">
      <div className="message-container" style={style}>
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

OutBalon2.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  opinion: PropTypes.oneOf(['satisfaction', 'dissatisfaction', 'excellent', 'good', 'fair']).isRequired,
  style: PropTypes.object,
};

export default OutBalon2;
