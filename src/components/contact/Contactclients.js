/* eslint-disable no-unused-vars */

import React, { useRef, useState } from "react";
import { Container, Typography, TextField, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { TextDecrypt } from "../content/TextDecrypt";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from 'sweetalert2';

import emailjs from '@emailjs/browser';

import './Contactclients.css';

const useStyles = makeStyles((theme) => ({
  main: {
    maxWidth: '100vw',
    marginTop: '3em',
    marginBottom: "3em",
  },
  form: {
    width: '100%',
  },
  formfield: {
    width: '100%',
    marginBottom: '2rem',
  },
}));



export const Contact = () => {
  const classes = useStyles();
  const greetings = "Deixe uma mensagem e eu entrarei em contato.";

  const form = useRef();
  const [recaptchaValue, setRecaptchaValue] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.name.value || !form.current.email.value || !form.current.message.value) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Todos os campos são obrigatórios!',
        showConfirmButton: true,
      });
      return;
    }

    if (!recaptchaValue) {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Por favor, complete o reCAPTCHA!',
        showConfirmButton: true,
      });
      return;
    }

    emailjs.sendForm('service_2ddtlxj', 'template_phbzcwu', form.current, 'ge62uBJpYsvV0npPp')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Você enviou um email!',
      showConfirmButton: false,
      timer: 1500
    })
    e.target.reset()
  };

  const handleRecaptchaChange = (value) => {
    setRecaptchaValue(value);
  };


    return (
      <section id="contact">
        <Container component="main" className={classes.main} maxWidth="md">
          <div className="contact">
            <div className="_form_wrapper">
              <form ref={form} onSubmit={sendEmail} className={classes.form}>
                <TextField
                  id="outlined-name-input"
                  label="Nome"
                  type="text"
                  size="small"
                  variant="filled"
                  name="name"
                  className={classes.formfield}
                />
                <TextField
                  id="outlined-password-input"
                  label="Email"
                  type="email"
                  size="small"
                  variant="filled"
                  name="email"
                  className={classes.formfield}
                />
                <TextField
                  id="outlined-password-input"
                  label="Mensagem"
                  type="textarea"
                  size="small"
                  multiline
                  minRows={5}
                  variant="filled"
                  name="message"
                  className={classes.formfield}
                />
                <ReCAPTCHA
                  sitekey="6Ld-TgQqAAAAAOMMLZA-_-x_kV_JQ8mIJzCb9G_1"
                  onChange={handleRecaptchaChange}
                  className={classes.formfield}
                />
                <button type="submit" value="Send" className="submit-btn">
                <i className="fas fa-terminal"></i>
                  <Typography component='span'> Enviar Mensagem</Typography>
                </button>
              </form>
            </div>
            <h1 className="contact_msg">
              <TextDecrypt text={greetings}/>
            </h1>
          </div>
        </Container>
      </section>
  );
};
