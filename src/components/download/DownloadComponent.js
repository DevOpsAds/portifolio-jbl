import React from 'react';
import './DownloadComponent.css'; // Substitua pelo seu arquivo de estilos

export const DownloadComponent = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/arquivos/automacao/scripts/exemplo1-linux-upadate.zip';
    link.setAttribute('download', 'exemplo.zip');

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Iniciando o download de um arquivo ZIP contendo um código seguro de automação de exemplo.');
  };

  return (
    <div className="download-component">
      <button onClick={handleDownload} className="download-button">
        Baixar Arquivo ZIP
      </button>
    </div>
  );
};


