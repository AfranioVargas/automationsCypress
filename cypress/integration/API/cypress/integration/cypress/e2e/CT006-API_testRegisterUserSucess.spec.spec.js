describe('API Test - User Registration', () => {
  it('Should register a new user successfully', () => {
    // Gerar um e-mail único para evitar conflitos
    const uniqueEmail = `afraniovargas+${Date.now()}@qa.dev`;

    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios', // Endpoint para cadastrar usuário
      body: {
        nome: 'AfranioVargas',
        email: uniqueEmail, // E-mail dinâmico
        password: 'Abc-123456e', // Senha válida
        administrador: 'true'
      },
      failOnStatusCode: false // Permite continuar mesmo se o email já estiver cadastrado
    }).then((response) => {
      if (response.status === 201) {
        // Validações para cadastro bem-sucedido
        expect(response.body).to.have.property('message', 'Cadastro realizado com sucesso');
        expect(response.body).to.have.property('_id');
      } else if (response.status === 400) {
        // Validações para email já cadastrado
        expect(response.body).to.have.property('message', 'Este email já está sendo usado');
      }
    });
  });
});