import React from 'react';
import PropTypes from 'prop-types';
import './Metrica.css';

// Função para calcular a cor média de uma lista de cores
const averageColor = (colors) => {
  const colorValues = colors.map(color => {
    const [r, g, b] = color.match(/\d+/g).map(Number);
    return [r, g, b];
  });

  const total = colorValues.reduce((acc, [r, g, b]) => {
    acc[0] += r;
    acc[1] += g;
    acc[2] += b;
    return acc;
  }, [0, 0, 0]);

  const avgColor = total.map(value => Math.round(value / colorValues.length));
  return `rgb(${avgColor[0]}, ${avgColor[1]}, ${avgColor[2]})`;
};

const Metrica = ({ satisfaction, dissatisfaction, excellent, good, fair }) => {
  const indicators = [
    { label: 'Satisfação', value: satisfaction, className: 'satisfacao-indicador', color: 'rgba(76, 175, 80, 1)' },
    { label: 'Insatisfação', value: dissatisfaction, className: 'dissatisfacao-indicador', color: 'rgba(244, 67, 54, 1)' },
    { label: 'Excelente', value: excellent, className: 'excelente-indicador', color: 'rgba(33, 150, 243, 1)' },
    { label: 'Bom', value: good, className: 'bom-indicador', color: 'rgba(255, 235, 59, 1)' },
    { label: 'Justo', value: fair, className: 'justo-indicador', color: 'rgb(179, 255, 0)' }
  ];

  // Filtra indicadores com valor zero
  const validIndicators = indicators.filter(indicator => indicator.value > 0);

  // Ordena os indicadores por valor
  validIndicators.sort((a, b) => a.value - b.value);

  // Adiciona um deslocamento vertical para indicadores com valores duplicados
  const offsetMap = new Map();
  const uniqueValues = new Set();
  const processedIndicators = validIndicators.map((indicator) => {
    const value = indicator.value;

    // Verifica se o valor já foi processado
    if (uniqueValues.has(value)) {
      // Se o valor já foi visto, aumenta o deslocamento
      offsetMap.set(value, (offsetMap.get(value) || 0) + 1);
    } else {
      // Se o valor é novo, adiciona ao conjunto de valores únicos
      uniqueValues.add(value);
      offsetMap.set(value, 0);
    }

    // Calcula o deslocamento
    const offset = offsetMap.get(value) * -10;

    return {
      ...indicator,
      offset
    };
  });

  // Calcula a cor média da régua
  const reguaColor = averageColor(validIndicators.map(indicator => indicator.color));

  return (
    <div>
      <div 
        className="tensor-satisfacao"
        style={{
          '--satisfaction': satisfaction,
          '--dissatisfaction': dissatisfaction,
          '--excellent': excellent,
          '--good': good,
          '--fair': fair,
        }}
      >
        <div className="satisfacao">
          Satisfação: {satisfaction}%
        </div>
        <div className="dissatisfacao">
          Insatisfação: {dissatisfaction}%
        </div>
        <div className="excelente">
          Excelente: {excellent}%
        </div>
        <div className="bom">
          Bom: {good}%
        </div>
        <div className="justo">
          Justo: {fair}%
        </div>
      </div>
      <div className="regua" style={{ backgroundColor: reguaColor }}>
        {processedIndicators.map((indicator) => {
          const { label, value, className, offset } = indicator;

          return (
            <div 
              key={label}  // Use um identificador único para a chave
              className={`indicador ${className}`} 
              style={{ 
                left: `${value}%`,
                top: `${offset}px` // Aplica o deslocamento vertical
              }}
            >
              {label}: {value}%
            </div>
          );
        })}
      </div>
    </div>
  );
};

Metrica.propTypes = {
  satisfaction: PropTypes.number.isRequired,
  dissatisfaction: PropTypes.number.isRequired,
  excellent: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  fair: PropTypes.number.isRequired,
};

export default Metrica;
