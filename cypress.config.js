const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://front.serverest.dev', // URL base do sistema
    supportFile: 'cypress/support/e2e.js', // Caminho para o arquivo de suporte
    specPattern: 'cypress/integration/**/*.spec.js', // Padrão para localizar os testes
  },
});