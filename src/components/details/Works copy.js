/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

export const Works = () => {
  const classes = useStyles();
  const [projects, setProjects] = useState([
  
      { 
        id: 1,
        title: 'Análise e Inteligência',
        description: `Implementação de soluções avançadas de análise de dados e inteligência artificial para otimizar processos e decisões estratégicas.`,
        alter: 'Análise e Inteligência',
        image: `${Portfolio}`,
      },
      { 
        id: 2,
        title: 'Desenvolvimento de Software',
        description: `Desenvolvimento de aplicações personalizadas utilizando tecnologias modernas para atender às necessidades específicas de negócio.`,
        alter: 'Desenvolvimento de Software',
        image: `${Veritru}`,
      },
      { 
        id: 3,
        title: 'Consultoria e Treinamentos',
        description: `Consultoria especializada e treinamentos em tecnologia da informação para capacitar equipes e maximizar o potencial operacional.`,
        alter: 'Consultoria e Treinamentos',
        image: `${Lofo}`,
      },
      { 
        id: 4,
        title: 'Infraestrutura e Manutenção',
        description: `Implementação e suporte contínuo de infraestrutura tecnológica para garantir operações eficientes e seguras.`,
        alter: 'Infraestrutura e Manutenção',
        image: `${Startup}`,
      },
      { 
        id: 5,
        title: 'Projetos Especiais e Inovação',
        description: `Desenvolvimento de projetos inovadores e personalizados que impulsionam a diferenciação competitiva e o crescimento estratégico.`,
        alter: 'Projetos Especiais e Inovação',
        image: `${Lacalle}`,
      },
  ]);
  

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={ project.id }>
            <div className="__img_wrapper">
              <img src={ project.image } alt={ project.alter }/>
            </div>
            <div className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={ project.id + '. ' + project.title } />
              </h3>
              <p className="description">
                { project.description }
              </p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};
