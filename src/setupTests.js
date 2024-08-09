// Importa as asserções adicionais fornecidas pelo @testing-library/jest-dom
import '@testing-library/jest-dom';

// Configura um mock global para o localStorage, se necessário
window.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
};

// Configura um mock global para o fetch, se necessário
window.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({}),
  })
);

// Configura uma função de limpeza global que será chamada após cada teste
afterEach(() => {
  // Limpa mocks, se necessário
  jest.clearAllMocks();
});

// Adicione outras configurações globais necessárias para seus testes
