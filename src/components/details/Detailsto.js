/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import './Detailsto.css';
import { projects } from './ProjectList';
import FormSelector from './FormSelector';

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

export const Detailsto = () => {
  const classes = useStyles();
  const { id } = useParams();

  const project = projects.find(proj => proj.id.toString() === id);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    company: '',
    position: '',
    product: '',
    quantity: ''
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
    } catch (error) {
      console.error(error);
    }
  };

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

        <FormSelector 
          formType={project.formType}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          formData={formData}
        />
      </Container>
    </section>
  );
};
