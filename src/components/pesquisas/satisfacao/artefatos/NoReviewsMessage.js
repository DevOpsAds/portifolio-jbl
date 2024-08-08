import React from 'react';
import PropTypes from 'prop-types';
import './NoReviewsMessage.css'; // Importa o CSS para estilização

const NoReviewsMessage = ({ productName }) => {
  return (
    <div className="no-reviews-message">
      <h2>Este produto ainda não recebeu avaliações!</h2>
      <p>
        Seja o primeiro a avaliar o {productName} e ajude outros clientes a fazerem uma escolha informada.
      </p>
      <p>
        Aproveite para adquirir junto recursos de inteligência e tecnologia para sua TI e obtenha o melhor desempenho para seu negócio.
      </p>
      <p>
        <strong>Adquira já o seu e compartilhe sua experiência!</strong>
      </p>
    </div>
  );
};

// Validação das props
NoReviewsMessage.propTypes = {
  productName: PropTypes.string.isRequired,
};

export default NoReviewsMessage;
