describe('API Test - Login', () => {
  it('Should successfully log in', () => {
    // Gerar um e-mail único para registro e login
    const uniqueEmail = `afraniovargas+${Date.now()}@qa.dev`;
    const password = 'Abc-123456e';

    // Primeiro, registrar o usuário
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios', // Endpoint para cadastrar usuário
      body: {
        nome: 'AfranioVargas',
        email: uniqueEmail, // E-mail dinâmico
        password: password, // Senha válida
        administrador: 'true'
      }
    }).then((registerResponse) => {
      // Validar que o registro foi bem-sucedido
      expect(registerResponse.status).to.eq(201);
      expect(registerResponse.body).to.have.property('message', 'Cadastro realizado com sucesso');

      // Realizar o login com o usuário recém-registrado
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login', // Endpoint para login
        body: {
          email: uniqueEmail, // E-mail registrado
          password: password // Senha registrada
        }
      }).then((loginResponse) => {
        // Validações para login bem-sucedido
        expect(loginResponse.status).to.eq(200);
        expect(loginResponse.body).to.have.property('message', 'Login realizado com sucesso');
        expect(loginResponse.body).to.have.property('authorization');
        expect(loginResponse.body.authorization).to.match(/^Bearer\s[\w-]+\.[\w-]+\.[\w-]+$/); // Valida o formato do token JWT
      });
    });
  });
});