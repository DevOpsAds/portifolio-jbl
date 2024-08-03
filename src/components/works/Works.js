/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Link } from "react-router-dom"; // Não esqueça de importar Link

import { IconButton, Tooltip } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PaidIcon from '@mui/icons-material/Paid';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import './Works.css';

// Import ../../assets/recentprojects/
import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

const useStyles = makeStyles(() => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "auto",
  },
}));

const iconComponents = {
  Public: PublicIcon,
  LockOpen: LockOpenIcon,
  Paid: PaidIcon,
  Assignment: AssignmentIcon,
  CalendarToday: CalendarTodayIcon
};

export const Works = () => {
  const classes = useStyles();
  const [projects] = useState([
    {
      id: 1,
      title: 'Manutenção e Suporte',
      description: 'Entrar',
      alter: 'Como está a saúde da sua TI?',
      image: `${Portfolio}`,
      icons: [
        { type: 'Public', tooltip: 'Experimente nossos serviços sem compromisso.' },
        { type: 'LockOpen', tooltip: 'Cadastre-se para testar nossos serviços com funcionalidades limitadas.' }
      ]
    },
    {
      id: 2,
      title: 'Desenvolvimento de Software',
      description: `Entrar`,
      alter: 'Desenvolvimento de Software',
      image: `${Veritru}`,
      icons: [
        { type: 'Paid', tooltip: 'Acesso completo com planos pagos.' }
      ]
    },
    {
      id: 3,
      title: 'Consultoria e Treinamentos',
      description: `Entrar`,
      alter: 'Consultoria e Treinamentos',
      image: `${Lofo}`,
      icons: [
        { type: 'Assignment', tooltip: 'Complete a ficha para obter acesso.' }
      ]
    },
    {
      id: 4,
      title: 'Infraestrutura e Manutenção',
      description: `Entrar`,
      alter: 'Infraestrutura e Manutenção',
      image: `${Startup}`,
      icons: [
        { type: 'CalendarToday', tooltip: 'Agende uma reunião para acesso personalizado.' }
      ]
    },
    {
      id: 5,
      title: 'Projetos Especiais e Inovação',
      description: `Entrar`,
      alter: 'Projetos Especiais e Inovação',
      image: `${Lacalle}`,
      icons: [
        { type: 'Public', tooltip: 'Experimente nossos serviços sem compromisso.' },
        { type: 'LockOpen', tooltip: 'Cadastre-se para testar nossos serviços com funcionalidades limitadas.' },
        { type: 'Paid', tooltip: 'Acesso completo com planos pagos.' },
        { type: 'Assignment', tooltip: 'Complete a ficha para obter acesso.' },
        { type: 'CalendarToday', tooltip: 'Agende uma reunião para acesso personalizado.' }
      ]
    },
  ]);

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
                <div className="__icon_wrapper">
                  <img src={project.image} alt={project.alter} />
                </div>
            </div>
            <Link to={`/details/${project.id}`} className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + '. ' + project.title} />
              </h3>
              <p className="description">
                {project.description}
                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                {project.icons.map((icon, index) => {
                  const IconComponent = iconComponents[icon.type];
                  return (
                    <Tooltip key={index} title={icon.tooltip} arrow>
                      <IconButton>
                        <IconComponent style={{ fontSize: 50, cursor: 'pointer' }} />
                      </IconButton>
                    </Tooltip>
                  );
                })}
              </div>
              </p>

              <div className="details-link">
                Saiba Mais
              </div>
            </Link>
          </div>
        ))}
      </Container>
    </section>
  );
};
