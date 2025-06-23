describe('API Test - List Products', () => {
  it('Should successfully log in and list registered products', () => {
    // Generate a unique email for registration and login
    const uniqueEmail = `afraniovargas+${Date.now()}@qa.dev`;
    const password = 'Abc-123456e';

    // First, register the user
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios', // Endpoint to register user
      body: {
        nome: 'AfranioVargas',
        email: uniqueEmail, // Dynamic email
        password: password, // Valid password
        administrador: 'true'
      }
    }).then((registerResponse) => {
      // Validate that the registration was successful
      expect(registerResponse.status).to.eq(201);
      expect(registerResponse.body).to.have.property('message', 'Cadastro realizado com sucesso');

      // Perform login with the newly registered user
      cy.request({
        method: 'POST',
        url: 'https://serverest.dev/login', // Endpoint for login
        body: {
          email: uniqueEmail, // Registered email
          password: password // Registered password
        }
      }).then((loginResponse) => {
        // Validations for successful login
        expect(loginResponse.status).to.eq(200);
        expect(loginResponse.body).to.have.property('message', 'Login realizado com sucesso');
        expect(loginResponse.body).to.have.property('authorization');

        const token = loginResponse.body.authorization;

        // Fetch the list of products
        cy.request({
          method: 'GET',
          url: 'https://serverest.dev/produtos', // Endpoint to list products
          headers: {
            Authorization: token // Use the login token
          }
        }).then((productResponse) => {
          // Validate the response for the product listing
          expect(productResponse.status).to.eq(200);
          expect(productResponse.body).to.have.property('quantidade');
          expect(productResponse.body).to.have.property('produtos');
          expect(productResponse.body.produtos).to.be.an('array'); // Ensure it is an array

          // Validate the example data provided in the Swagger
          if (productResponse.body.produtos.length > 0) {
            const firstProduct = productResponse.body.produtos[0];
            expect(firstProduct).to.have.property('nome');
            expect(firstProduct).to.have.property('preco');
            expect(firstProduct).to.have.property('descricao');
            expect(firstProduct).to.have.property('quantidade');
            expect(firstProduct).to.have.property('_id');
          }
        });
      });
    });
  });
});