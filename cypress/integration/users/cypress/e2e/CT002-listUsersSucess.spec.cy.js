describe('User Listing', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/');
    cy.get('input[name="email"]').type('afraniovargas@gmail.com');
    cy.get('input[name="password"]').type('Abe-123456');
    cy.get('button[type="submit"]').click();

    // Adiciona log para depuração
    cy.log('Tentando validar o login...');
    
    // Valida se o login foi bem-sucedido
    cy.contains('Bem Vindo AfranioVargas', { timeout: 5000 }).should('be.visible'); // Substitua 'Bem Vindo AfranioVargas' por um texto ou elemento que confirme o login.
  });

  it('Should successfully list users', () => {
    // Verifica se o botão de listar usuários está visível e clica nele
    cy.get('[data-testid="listarUsuarios"]', { timeout: 4000 }).should('be.visible').click();

    // Verifica que a página de listagem de usuários foi carregada
    cy.contains('Lista dos usuários').should('be.visible');
  });
});
