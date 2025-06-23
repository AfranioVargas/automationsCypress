const { defineConfig } = require('cypress'); // Importa a função defineConfig

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/integration/**/*.spec.js', // Inclui todos os subdiretórios dentro de integration
    baseUrl: 'https://serverest.dev', // URL base da API
  },
});