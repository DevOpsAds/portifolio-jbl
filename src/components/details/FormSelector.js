// src/components/FormSelector.js
import React from 'react';
import PropTypes from 'prop-types';
import Form1 from './forms/Form1';
import Form2 from './forms/Form2';
import Form3 from './forms/Form3';
import Form4 from './forms/Form4';

const FormSelector = ({ formType, handleSubmit, handleChange, formData }) => {
  switch (formType) {
    case 'Form1':
      return <Form1 handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />;
    case 'Form2':
      return <Form2 handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />;
    case 'Form3':
      return <Form3 handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />;
    case 'Form4':
      return <Form4 handleSubmit={handleSubmit} handleChange={handleChange} formData={formData} />;
    default:
      return null;
  }
};

FormSelector.propTypes = {
  formType: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.object.isRequired,
};

export default FormSelector;
