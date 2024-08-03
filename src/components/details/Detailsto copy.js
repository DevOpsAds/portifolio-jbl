/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Link, useParams } from "react-router-dom"; // Não esqueça de importar Link
import axios from 'axios';

import './Detailsto.css';

const useStyles = makeStyles((theme) => ({
    main: {
        maxWidth: '100vw',
        marginTop: '3em',
        marginBottom: "auto",
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
}));



const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/form/', formData);
      console.log(response.data);
      // Handle success, e.g., show a success message
    } catch (error) {
      console.error(error);
      // Handle error, e.g., show an error message
    }
  };

}

export const Detailsto = () => {
    const classes = useStyles();
    const { id } = useParams();

    const projects = [
        {
            id: 1,
            title: 'Serviços Exclusivos de Manutenção Preventiva e Corretiva para Empresas',
            description: `A manutenção adequada da infraestrutura de TI é fundamental para garantir a continuidade e eficiência das operações empresariais. Nossa empresa oferece serviços de manutenção preventiva e corretiva, especificamente voltados para empresas que valorizam o desempenho e a segurança de seus sistemas.`,
            alter: 'Serviços Exclusivos de Manutenção Preventiva e Corretiva para Empresas',
        },
        {
            sub: 1,
            title: 'Serviços Exclusivos de Manutenção Preventiva e Corretiva para Empresas',
            description: `A manutenção adequada da infraestrutura de TI é fundamental para garantir a continuidade e eficiência das operações empresariais. Nossa empresa oferece serviços de manutenção preventiva e corretiva, especificamente voltados para empresas que valorizam o desempenho e a segurança de seus sistemas.`,
            alter: 'Serviços Exclusivos de Manutenção Preventiva e Corretiva para Empresas',
        },
        {
            id: 2,
            title: 'Desenvolvimento de Software',
            description: `Desenvolvimento de aplicações personalizadas utilizando tecnologias modernas para atender às necessidades específicas de negócio.`,
            alter: 'Desenvolvimento de Software',
        },
        {
            id: 3,
            title: 'Consultoria e Treinamentos',
            description: `Consultoria especializada e treinamentos em tecnologia da informação para capacitar equipes e maximizar o potencial operacional.`,
            alter: 'Consultoria e Treinamentos',
        },
        {
            id: 4,
            title: 'Infraestrutura e Manutenção',
            description: `Implementação e suporte contínuo de infraestrutura tecnológica para garantir operações eficientes e seguras.`,
            alter: 'Infraestrutura e Manutenção',
        },
        {
            id: 5,
            title: 'Projetos Especiais e Inovação',
            description: `Desenvolvimento de projetos inovadores e personalizados que impulsionam a diferenciação competitiva e o crescimento estratégico.`,
            alter: 'Projetos Especiais e Inovação',
        },
    ];

    const project = projects.find(proj => proj.id.toString() === id || proj.sub.toString() === id);

    if (!project) {
        return <div>Projeto não encontrado</div>;
    }

    return (
        <section id="works">
            <Container component="main" className={classes.main} maxWidth="md">
                <div className="project">
                    <div className="__content_wrapper">
                        <h3 className="title">
                            <TextDecrypt text={project.id + '. ' + project.title} />
                        </h3>
                        <p className="description">
                            {project.description}
                        </p>
                        <Link to="/" className="details-link">
                            Voltar
                        </Link>
                    </div>
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Name:</label>
                        <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Email:</label>
                        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <label>Message:</label>
                        <textarea name="message" value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </Container>
        </section>
    );
};
