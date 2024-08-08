import React, { useContext } from 'react';

import './Satisfacao.css'; // Importe o arquivo CSS

import Header from './artefatos/Header'; // Importe o componente Header
import  Metrica from './artefatos/Metrica';
import ContentionsChat from './ContentionsChat';
// Simulação do contexto de tema
import { ThemeContext } from '../../theme/ThemeProvider';  // Ajuste o caminho conforme necessário

export const Satisfacao = () => {
  const { theme } = useContext(ThemeContext);
 




  const data = {
    title: "Resultados da pesquisa de satisfação do cliente, incluindo depoimentos",
    subtitle: "Nossa política é que todos estejam realmente  satisfeitos com nossos serviços. Embora saibamos que pode ser impossível 100% que isso aconteça, continuaremos tentando sempre melhorar nossos serviços para que isso seja nossa realidade."
  };

  return (
    <div className={`__faq_form_wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Header title={data.title} subtitle={data.subtitle} />
      <Metrica 
        satisfaction={70} 
        dissatisfaction={0} 
        excellent={50} 
        good={89} 
        fair={98} 
      />
      <ContentionsChat />

    </div>
  

  );
};
