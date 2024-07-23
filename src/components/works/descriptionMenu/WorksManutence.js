/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Link } from "react-router-dom"; // Não esqueça de importar Link

import './WorksManutence.css';

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
          title: ' Como está a saúde da sua TI? ',
          description: 'Se a TI é essencial para o sucesso do seu negócio, clique aqui para descobrir como nossos serviços de manutenção preventiva e corretiva por contrato podem beneficiar sua empresa."',
          alter: ' Como está a saúde da sua TI? ',
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
      ]);ritru}`,
      },
      {
        id: 3,
        title: 'Consultoria e Treinamentos',
        description: 'Consultoria especializada e treinamentos em tecnologia da informação para capacitar equipes e maximizar o potencial operacional.',
        alter: 'Consultoria e Treinamentos',
        image: `${Lofo}`,
      },
      {
        id: 4,
        title: 'Infraestrutura e Manutenção',
        description: 'Implementação e suporte contínuo de infraestrutura tecnológica para garantir operações eficientes e seguras.',
        alter: 'Infraestrutura e Manutenção',
        image: `${Startup}`,
      },
      {
        id: 5,
        title: 'Projetos Especiais e Inovação',
        description: 'Desenvolvimento de projetos inovadores e personalizados que impulsionam a diferenciação competitiva e o crescimento estratégico.',
        alter: 'Projetos Especiais e Inovação',
        image: `${Lacalle}`,
      },
      {
        id: 6,
        title: 'Manutenção Preventiva Regular',
        description: 'Implementação de rotinas periódicas de manutenção para prevenir problemas antes que eles ocorram. Verificação e atualização de softwares e sistemas operacionais para garantir segurança e desempenho otimizado.',
        alter: 'Manutenção Preventiva Regular',
        image: `${Manutenção}`,
      },
      {
        id: 7,
        title: 'Monitoramento Proativo',
        description: 'Utilização de ferramentas de monitoramento para detectar problemas potenciais antes que afetem a operação do cliente. Análise contínua de métricas de desempenho para identificar áreas de melhoria e evitar falhas críticas.',
        alter: 'Monitoramento Proativo',
        image: `${Proativo}`,
      },
      {
        id: 8,
        title: 'Suporte Rápido e Responsivo',
        description: 'Disponibilidade de suporte técnico rápido para resolver problemas imprevistos. SLAs (Service Level Agreements) claros para garantir tempos de resposta rápidos e eficientes.',
        alter: 'Suporte Rápido e Responsivo',
        image: `${Rápido}`,
      },
      {
        id: 9,
        title: 'Segurança Cibernética',
        description: 'Implementação de medidas robustas de segurança cibernética para proteger os sistemas e dados dos clientes contra ameaças externas. Auditorias regulares de segurança e recomendações de melhores práticas para mitigar riscos.',
        alter: 'Segurança Cibernética',
        image: `${Cyber}`,
      },
      {
        id: 10,
        title: 'Backup e Recuperação de Dados',
        description: 'Implementação e monitoramento de estratégias de backup automatizado para garantir a recuperação rápida de dados em caso de falhas.',
        alter: 'Backup e Recuperação de Dados',
        image: `${Buckup}`,
      },
      {
        id: 11,
        title: 'Consultoria em Tecnologia',
        description: 'Oferta de consultoria especializada para ajudar os clientes a escolherem e implementarem tecnologias que melhor atendam às suas necessidades empresariais. Planejamento estratégico de TI alinhado aos objetivos de negócio dos clientes.',
        alter: 'Consultoria em Tecnologia',
        image: `${Tecnologia}`,
      },
      {
        id: 12,
        title: 'Treinamento e Capacitação',
        description: 'Provisão de treinamentos regulares para usuários finais sobre segurança cibernética, melhores práticas de uso de TI, e novas atualizações tecnológicas.',
        alter: 'Treinamento e Capacitação',
        image: `${Capacitação}`,
      },
      {
        id: 13,
        title: 'Relacionamento e Parceria',
        description: 'Construção de relacionamentos de longo prazo com os clientes, baseados em confiança e transparência. Colaboração ativa com os clientes para entender suas necessidades em evolução e adaptar os serviços de acordo.',
        alter: 'Relacionamento e Parceria',
        image: `${Relacionamento}`,
      },
    ];
    

  return (
    <section id="works">
      <Container component="main" className={classes.main} maxWidth="md">
        {projects.map((project) => (
          <div className="project" key={project.id}>
            <div className="__img_wrapper">
              <img src={project.image} alt={project.alter} />
            </div>
            <Link to={`/details/${project.id}`} className="__content_wrapper">
              <h3 className="title">
                <TextDecrypt text={project.id + '. ' + project.title} />
              </h3>
              <p className="description">
                {project.description}
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
