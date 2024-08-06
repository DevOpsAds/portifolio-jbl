import React from "react";

import { TextDecrypt } from "./TextDecrypt";
import Resume from "../../../settings/resume.json";
import { FirstName, LastName } from "../../../utils/getName";
import { Faq } from '../../faq/Faq'; // Importar o componente



export const Content= () => {


  return (
    <div className="page-index-heard">
    
        <h1>
            <TextDecrypt text={`${FirstName} ${LastName}`} />
        </h1>
        <p>
            <TextDecrypt text={`${Resume.basics.job1} + `} />
            <TextDecrypt text={"Scripts"} />
        </p>
        <Faq />
      
    </div>
  );
};
