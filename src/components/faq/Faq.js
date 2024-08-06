import React, { useState,useContext } from 'react';
import './FAQ.css';
import { ThemeContext } from '../theme/ThemeProvider';  // Ajuste o caminho conforme necessário


const faqData = [
  {
    question: 'O que são scripts de automação?',
    answer: 'Scripts de automação são conjuntos de instruções programadas que realizam tarefas específicas de forma automática, sem a necessidade de intervenção manual.',
  },
  {
    question: 'Quais são os benefícios da automação de TI?',
    answer: 'A automação de TI oferece vários benefícios, incluindo economia de tempo e recursos, redução de erros humanos, aumento da eficiência e produtividade, melhoria na consistência das operações, e liberação de profissionais de TI para se concentrar em tarefas mais estratégicas.',
  },
  {
    question: 'Em que áreas a automação pode ser aplicada?',
    answer: 'A automação pode ser aplicada em várias áreas, como gestão de infraestrutura de TI, monitoramento e gerenciamento de redes, backup e recuperação de dados, implementação e configuração de software, testes de sistemas e aplicações, e gestão de segurança e conformidade.',
  },
  {
    question: 'Como a automação pode melhorar a manutenção dos sistemas de TI?',
    answer: 'A automação pode melhorar a manutenção dos sistemas de TI através de monitoramento contínuo e alertas automáticos para identificar e resolver problemas rapidamente, execução de tarefas de manutenção preventiva de forma programada, aplicação de patches e atualizações de segurança sem intervenção manual, e automatização de backups regulares para garantir a integridade dos dados.',
  },
  {
    question: 'Quais são os desafios da automação de TI?',
    answer: 'Alguns dos desafios da automação de TI incluem complexidade na criação e manutenção de scripts de automação, necessidade de integração com sistemas e ferramentas existentes, garantir a segurança e conformidade das operações automatizadas, e treinamento de pessoal para gerenciar e operar soluções de automação.',
  },
  {
    question: 'É necessário ter um especialista em TI para implementar scripts de automação?',
    answer: 'Embora não seja estritamente necessário, ter um especialista em TI pode ser muito benéfico para a implementação eficaz de scripts de automação. Profissionais de TI possuem o conhecimento técnico necessário para identificar as necessidades da empresa, desenvolver scripts seguros e eficientes, e garantir que a automação esteja alinhada com os objetivos e políticas da organização.',
  },
  {
    question: 'Como a automação pode ser personalizada para atender às necessidades específicas da minha empresa?',
    answer: 'A automação pode ser personalizada através da criação de scripts que atendam às necessidades específicas e requisitos operacionais da sua empresa. Isso pode incluir a automação de tarefas únicas, integração com sistemas específicos, e desenvolvimento de soluções que se adaptem aos fluxos de trabalho e processos internos da organização.',
  },
  {
    question: 'Quais são os custos associados à implementação de scripts de automação?',
    answer: 'Os custos associados à implementação de scripts de automação podem variar dependendo da complexidade das tarefas a serem automatizadas, do tempo necessário para desenvolver e testar os scripts, e das ferramentas e tecnologias utilizadas. Em muitos casos, os benefícios de longo prazo em termos de economia de tempo e recursos podem justificar o investimento inicial.',
  },
  {
    question: 'Como posso começar a implementar a automação na minha empresa?',
    answer: 'Implementar a automação na sua empresa pode ser um processo simples e eficaz com a nossa ajuda. Utilize nosso formulário de contato na seção de compras do nosso site para descrever um pouco sobre sua demanda. Detalhe os processos que você deseja automatizar e quaisquer desafios específicos que enfrenta. Após receber sua descrição, entraremos em contato para entender melhor suas necessidades e objetivos. Desenvolveremos e testaremos scripts de automação adaptados às suas necessidades específicas, garantindo que eles funcionem perfeitamente em seu ambiente. Após a fase de testes, implementaremos os scripts em seu sistema e ofereceremos suporte contínuo para garantir que tudo funcione sem problemas e que qualquer ajuste necessário seja realizado rapidamente.',
  },
];

export const Faq = () => {
  const { theme } = useContext(ThemeContext);
 
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className={`__faq_form_wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      
      <h1> FAQ - Perguntas Frequentes</h1>
      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <button className="faq-question" onClick={() => handleToggle(index)}>
            {item.question}
          </button>
          {activeIndex === index && <div className="faq-answer">{item.answer}</div>}
        </div>
      ))}
     
    </div>
  );
};





