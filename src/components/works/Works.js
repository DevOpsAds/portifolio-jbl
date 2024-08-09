import React, { useState, useMemo } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Link } from "react-router-dom";
import Fuse from "fuse.js"; // Importando o Fuse.js

import { IconButton, Tooltip } from '@mui/material';
import PublicIcon from '@mui/icons-material/Public';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import PaidIcon from '@mui/icons-material/Paid';
import AssignmentIcon from '@mui/icons-material/Assignment';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

import './Works.css';

import Portfolio from '../../assets/recentprojects/react-portfolio.png';
import Veritru from '../../assets/recentprojects/veritru.png';
import Lofo from '../../assets/recentprojects/lofo.png';
import Startup from '../../assets/recentprojects/startup.png';
import Lacalle from '../../assets/recentprojects/lacalle.png';

import { SearchBar } from '../Search/SearchBar';

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
  CalendarToday: CalendarTodayIcon,
};

export const Works = () => {
  const [search, setSearch] = useState('');
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
        { type: 'LockOpen', tooltip: 'Cadastre-se para testar nossos serviços com funcionalidades limitadas.' },
      ],
      keywords: []
    },
    {
      id: 2,
      title: 'Desenvolvimento de Software',
      description: 'Entrar',
      alter: 'Desenvolvimento de Software',
      image: `${Veritru}`,
      icons: [
        { type: 'Paid', tooltip: 'Acesso completo com planos pagos.' },
      ],
      keywords: []
    },
    {
      id: 3,
      title: 'Consultoria e Treinamentos',
      description: 'Entrar',
      alter: 'Consultoria e Treinamentos',
      image: `${Lofo}`,
      icons: [
        { type: 'Assignment', tooltip: 'Complete a ficha para obter acesso.' },
      ],
      keywords: []
    },
    {
      id: 4,
      title: 'Infraestrutura e Manutenção',
      description: 'Entrar',
      alter: 'Infraestrutura e Manutenção',
      image: `${Startup}`,
      icons: [
        { type: 'CalendarToday', tooltip: 'Agende uma reunião para acesso personalizado.' },
      ],
      keywords: ['Cargo Contratante','Nome','Especialização','Nível de Senioridade','Racional','Salário Médio (R$)',
        'Arquiteto de Soluções','Consultor de TI','Arquitetura de Software','Sênior','O Consultor de TI oferece expertise em Arquitetura de Software',' assegurando que as soluções desenvolvidas sejam robustas e escaláveis.','18000',
        'Analista de TI','Analista de Sistemas','Análise de Requisitos','Pleno','O Analista de Sistemas realiza a análise detalhada dos requisitos',' garantindo que as especificações estejam alinhadas com as necessidades do negócio.','12000',
        'Coordenador de TI','Desenvolvedor de Software','Desenvolvimento Backend','Pleno','O Desenvolvedor de Software constrói a lógica e o backend do sistema',' essencial para o funcionamento e desempenho do software.','13000',
        'Gerente de Desenvolvimento','Desenvolvedor Frontend','Desenvolvimento Frontend','Pleno','O Desenvolvedor Frontend é responsável pela criação da interface de usuário',' assegurando uma experiência agradável e funcional.','11000',
        'Arquiteto de Soluções','Especialista em Banco de Dados','Gerenciamento de Banco de Dados','Sênior','O Especialista em Banco de Dados gerencia os dados de forma eficiente e segura',' garantindo a integridade e performance dos sistemas.','15000',
        'Gestor de Inovação','Engenheiro de DevOps','Automação e Infraestrutura','Sênior','O Engenheiro de DevOps integra automação e infraestrutura',' permitindo um ciclo de desenvolvimento mais rápido e eficiente.','16000',
        'Responsável pela Segurança da Informação','Consultor de Segurança da Informação','Segurança da Informação','Sênior','O Consultor de Segurança da Informação assegura que todas as práticas e sistemas estejam protegidos contra ameaças.','17000',
        'Gerente de Projetos','Gerente de Projeto','Gerenciamento de Projetos','Sênior','O Gerente de Projeto coordena todas as fases do projeto',' garantindo que sejam cumpridos prazos',' orçamentos e qualidade.','20000',
        'Chefe de Qualidade','Analista de Qualidade','Testes e Garantia de Qualidade','Pleno','O Analista de Qualidade executa testes rigorosos',' garantindo que o produto final atenda a todos os padrões de qualidade.','11500',
        'Diretor de TI','Arquiteto de Soluções','Design de Arquitetura','Sênior','O Arquiteto de Soluções define a arquitetura de sistemas complexos',' assegurando que estejam alinhados com a estratégia de TI da organização.','19000']
    },
    {
      id: 5,
      title: 'Projetos Especiais e Inovação',
      description: 'Entrar',
      alter: 'Projetos Especiais e Inovação',
      image: `${Lacalle}`,
      icons: [
        { type: 'Public', tooltip: 'Experimente nossos serviços sem compromisso.' },
        { type: 'LockOpen', tooltip: 'Cadastre-se para testar nossos serviços com funcionalidades limitadas.' },
        { type: 'Paid', tooltip: 'Acesso completo com planos pagos.' },
        { type: 'Assignment', tooltip: 'Complete a ficha para obter acesso.' },
        { type: 'CalendarToday', tooltip: 'Agende uma reunião para acesso personalizado.' },
      ],
      keywords: []
    },
  ]);

  // Configura o Fuse.js
  const fuse = useMemo(() => {
    const options = {
      keys: [
        'title',
        'description',
        'alter',
        'keywords',
        'icons.tooltip',
      ],
      threshold: 0.5, // Ajusta a sensibilidade da busca (0 = match exato, 1 = todos os itens são correspondências)
    };
    return new Fuse(projects, options);
  }, [projects]);

  // Função para filtrar os projetos usando o Fuse.js
  const filteredProjects = search ? fuse.search(search).map(result => result.item) : projects;

  return (
    <section id="works">
      <SearchBar onSearch={setSearch} />
      <Container component="main" className={classes.main} maxWidth="md">
        {filteredProjects.map((project) => (
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

              <div className="details-link">Saiba Mais</div>
            </Link>
          </div>
        ))}
      </Container>
    </section>
  );
};
