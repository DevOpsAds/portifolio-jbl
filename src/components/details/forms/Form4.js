import React, { useState } from 'react';
import PropTypes from 'prop-types';
import optionsData from './form4_options.json'; // Ajuste o caminho conforme necessário

const Form4 = ({ handleSubmit, handleChange, formData }) => {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelectChange = (event) => {
    const selectedOption = event.target.value;

    // Adiciona o item selecionado à lista, se não estiver já presente
    if (selectedOption && !selectedItems.includes(selectedOption)) {
      setSelectedItems([...selectedItems, selectedOption]);
    }
  };

  const handleItemDoubleClick = (item) => {
    // Remove o item da lista
    setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <div className="form-group">
        <label htmlFor="option">Selecione uma opção:</label>
        <select
          className="form-control"
          id="option"
          name="option"
          value={formData.option}
          onChange={handleSelectChange}
          required
        >
          <option value="" disabled>Selecione uma opção</option>
          {optionsData.options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>Itens Selecionados:</label>
        <ul className="list-group">
          {selectedItems.map((item, index) => (
            <li
              key={index}
              className="list-group-item"
              onDoubleClick={() => handleItemDoubleClick(item)}
            >
              {optionsData.options.find(option => option.value === item)?.label || item}
            </li>
          ))}
        </ul>
      </div>

      <div className="form-group">
        <label htmlFor="description">Descrição:</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="budget">Orçamento Estimado:</label>
        <input
          type="text"
          className="form-control"
          id="budget"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="deadline">Prazo Desejado para Conclusão:</label>
        <input
          type="date"
          className="form-control"
          id="deadline"
          name="deadline"
          value={formData.deadline}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="preferredDate">Data Preferida para Agendamento:</label>
        <input
          type="date"
          className="form-control"
          id="preferredDate"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="testDate">Data Preferida para Teste:</label>
        <input
          type="date"
          className="form-control"
          id="testDate"
          name="testDate"
          value={formData.testDate}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="contractAcknowledgement">
          <input
            type="checkbox"
            id="contractAcknowledgement"
            name="contractAcknowledgement"
            checked={formData.contractAcknowledgement}
            onChange={handleChange}
            required
          />
          <span>&nbsp;Estou ciente e aceito os termos do contrato</span>
        </label>
      </div>

      <div className="form-group">
        <p className="form-instructions">
          <strong>Instruções:</strong><br />
          1. Selecione uma opção do menu suspenso para adicionar o script desejado à lista de scripts selecionados.<br />
          2. Para remover um script da lista, clique duas vezes sobre ele.<br />
          3. Preencha todos os campos obrigatórios do formulário:<br />
          <ul className="instructions-list">
            <li><strong>Descrição:</strong> Forneça detalhes sobre os scripts necessários ou requisitos específicos.</li>
            <li><strong>Orçamento Estimado:</strong> Informe seu orçamento estimado para os scripts.</li>
            <li><strong>Prazo Desejado para Conclusão:</strong> Indique a data em que você deseja que o trabalho seja concluído.</li>
            <li><strong>Data Preferida para Agendamento:</strong> Escolha a data que você prefere para o agendamento do serviço.</li>
            <li><strong>Data Preferida para Teste:</strong> Escolha a data que você prefere para o teste do script.</li>
          </ul>
          4. Clique em &quot;Enviar&quot; para submeter o formulário.<br />
          5. Após o envio, entraremos em contato para confirmar o orçamento e o cronograma.
        </p>
      </div>

      <button type="submit" className="btn btn-primary">Enviar</button>
    </form>
  );
};

Form4.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  formData: PropTypes.shape({
    option: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    budget: PropTypes.string.isRequired,
    deadline: PropTypes.string.isRequired,
    preferredDate: PropTypes.string.isRequired,
    testDate: PropTypes.string.isRequired,
    contractAcknowledgement: PropTypes.bool.isRequired,
  }).isRequired,
};

export default Form4;
