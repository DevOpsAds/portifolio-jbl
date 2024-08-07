import React, { useState, useContext, useEffect } from 'react';
import './Inovation.css';
import { ThemeContext } from '../theme/ThemeProvider'; // Ajuste o caminho conforme necessário

const Data = [

  {
    "icon": "🛠️  🐧 ",
    "title": "Script para Linux (Bash)",
    "text": "Este script atualiza a lista de pacotes e instala as atualizações disponíveis em uma distribuição baseada no Debian (como Ubuntu).",
    "downloadLink": "/download/recurso2"
  },
  {
    "icon": "🛠️ 🪟 ",
    "title": "Script para Windows (PowerShell)",
    "text": "Este script atualiza a lista de pacotes e instala as atualizações disponíveis usando o PowerShell.",
    "downloadLink": "/download/recurso2"
  }
  // Adicione mais recursos conforme necessário
];

export const Inovation = () => {
  const { theme } = useContext(ThemeContext);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    // Função para carregar dados do JSON
    const fetchResources = async () => {
      try {
        // Simula uma chamada a uma API ou carregamento do JSON local
        const response = await fetch('/path/to/your/resources.json'); // Substitua pelo caminho do seu JSON
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setResources(data);
      } catch (error) {
        console.error('Failed to fetch resources:', error);
        setResources(Data); // Fallback para os dados locais
      }
    };

    fetchResources();
  }, []);


  return (
    <div className={`__faq_form_wrapper ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <h1> Este produto oferece inovação tecnológica avançada</h1>
      <div className="innovation-page">
        {/* Div para ícones */}
        <div className="icons-container">
          <div className="icon-overlay">📊</div>
          <div className="icon-overlay">🚀</div>
        </div>
        
        {/* Div para texto de apresentação */}
        <div className="intro-text">
          <h1>Aplique scripts e amplie o potencial da sua empresa</h1>
          <p>Explore os recursos de scripts e benefícios que preparamos para ajudar a contornar problemas que você ou sua equipe de TI possam enfrentar. Encontre a solução para cada problema armazenada na sala de TI e veja como eles podem transformar a sua experiência.</p>
        </div>
        
        {/* Div para chamado para download */}
        <div className="download-callout">
          <h2>Baixe Agora</h2>
          <p>Obtenha acesso imediato aos nossos exemplos de recursos de scripts.</p>
        </div>
        
        {/* Div para recursos */}
        <div className="resources">
          {resources.map((resource, index) => (
            <div key={index} className="resource-item">
              <div className="resource-icon">{resource.icon}</div>
              <div className="resource-details">
                <h3 className="resource-title">{resource.title}</h3>
                <p className="resource-text">{resource.text}</p>
              </div>
              <a href={resource.downloadLink} className="download-link">Baixar</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
