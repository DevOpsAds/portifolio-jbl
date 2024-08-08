import React from 'react';
import PropTypes from 'prop-types';
import './BalonFinalOutComent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGrinStars, faFrown, faCheckCircle, faTachometerAlt, faUserNinja } from '@fortawesome/free-solid-svg-icons';

// Mapeamento de ícones para opiniões
const opinionIcons = {
  satisfaction: faGrinStars,
  dissatisfaction: faFrown,
  excellent: faCheckCircle,
  good: faTachometerAlt,
  fair: faUserNinja,
};

const BalonFinalOutComent = ({ avatar, message, opinion, style, username }) => {
   // Define a cor do ícone com base na opinião
   const iconColor = {
    satisfaction: 'green',
    dissatisfaction: 'red',
    excellent: 'blue',
    good: 'orange',
    fair: 'gray',
  }[opinion] || 'black';

  return (
    <div className="balon-final-out-coment" style={style}>
      <div className="avatar-container">
        <img src={avatar} alt="Avatar" className="avatar" />
        <div className="username">{username}</div>
      </div>
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
    </div>
  );
};

BalonFinalOutComent.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  opinion: PropTypes.oneOf(['satisfaction', 'dissatisfaction', 'excellent', 'good', 'fair']).isRequired,
  style: PropTypes.object,
};

export default BalonFinalOutComent;
