import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import './Header.css'; // Importe o arquivo CSS

const Header = ({ title, subtitle }) => {


  return (
    <div>
      <h1>{title}</h1>
      <div className="line"></div> {/* Linha antes do subtítulo */}
      <h2>{subtitle}</h2>
      <div className="line"></div> {/* Linha depois do subtítulo */}
    </div>
  );
};

// Defina os tipos das props esperadas
Header.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Header;
