import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes para a validação de props
import { TextField } from '@mui/material';


export const SearchBar = ({ onSearch }) => {
    const handleChange = (event) => {
      onSearch(event.target.value);  // Passa o termo de busca para o componente pai
    };
  
    return (
      <TextField
        label="Buscar"
        variant="outlined"
        fullWidth
        onChange={handleChange}
      />
    );
  };
  
  // Validação de props usando PropTypes
  SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired, // onSearch é obrigatório e deve ser uma função
  };
  