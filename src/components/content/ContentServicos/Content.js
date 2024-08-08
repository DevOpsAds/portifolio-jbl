import React from "react";

import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../../settings/resume.json";
import { FirstName, LastName } from "../../../utils/getName";

import { Inovation } from '../../inovation/Inovation'; // Importar o componente
import { DownloadComponent } from '../../download/DownloadComponent'; // Importar o componente
import { Faq } from '../../faq/Faq';
import  { Satisfacao } from'../../pesquisas/satisfacao/Satisfacao';

import { useLocation } from 'react-router-dom';



export const ContentScripts= () => {


  const location = useLocation();
  const { pathname } = location;


  const renderComponent = () => {
    switch (pathname) {
      case '/servicos':
        return <Satisfacao />;

      case '/servicos/scripts/faq':
        return <Faq />;
      
      case '/servicos/scripts/inovacao':
        return  <Inovation />;
      
      case '/servicos/scripts/download/exemplo1':
        return  <DownloadComponent />;

      default:
        return <div>Componente padrão ou mensagem de Página não encontrada</div>;
    }
  };


  return (
    <div className="page-index-heard">
    
        <h1>
            <TextDecrypt text={`${FirstName} ${LastName}`} />
        </h1>
        <p>
            <TextDecrypt text={`${Resume.basics.job1} + `} />
            <TextDecrypt text={"Scripts"} />
        </p>
        
            
        {renderComponent()}
      
    </div>
  );
};

