import React from 'react';
import Metrica from './Metrica';
import ScrollListComent from '../ScrollListComent';
import ContentionsChat from '../ContentionsChat';
import NoReviewsMessage from './NoReviewsMessage';
import './PercentColor.css';

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

const AppPercetColor = () => {
  // Dados de exemplo para Metrica
  const satisfaction = 0;
  const excellent = 0;
  const fair = 0;
  const dissatisfaction = 0;  
  const good = 0;

  const indicators = [
    { label: 'Satisfação', value: satisfaction, color: 'rgba(76, 175, 80, 1)' },
    { label: 'Insatisfação', value: dissatisfaction, color: 'rgba(244, 67, 54, 1)' },
    { label: 'Excelente', value: excellent, color: 'rgba(33, 150, 243, 1)' },
    { label: 'Bom', value: good, color: 'rgba(255, 235, 59, 1)' },
    { label: 'Justo', value: fair, color: 'rgb(179, 255, 0)' }
  ];

  // Filtra indicadores com valor zero
  const validIndicators = indicators.filter(indicator => indicator.value > 0);

  // Calcula a cor média da régua se houver indicadores válidos
  const reguaColor = validIndicators.length > 0 ? averageColor(validIndicators.map(indicator => indicator.color)) : 'transparent';

  return (
    <div className="percent-color">
      {validIndicators.length > 0 && <ContentionsChat />}
      {/* Renderiza o componente Metrica */}
      <Metrica
        satisfaction={satisfaction}
        dissatisfaction={dissatisfaction}
        excellent={excellent}
        good={good}
        fair={fair}
      />
      {/* Renderiza o componente ScrollListComent e passa a cor da régua */}
      {validIndicators.length > 0 && <ScrollListComent reguaColor={reguaColor} /> }
      {validIndicators.length == 0 && <NoReviewsMessage /> }
    </div>
  );
};

export default AppPercetColor;
