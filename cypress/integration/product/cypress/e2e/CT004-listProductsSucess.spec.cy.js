describe('User Listing', () => {
  beforeEach(() => {
    cy.visit('https://front.serverest.dev/');
    cy.get('input[name="email"]').type('afraniovargas@gmail.com');
    cy.get('input[name="password"]').type('Abe-123456');
    cy.get('button[type="submit"]').click();

    // Valida se o login foi bem-sucedido
    cy.contains('Bem Vindo AfranioVargas').should('be.visible'); // Substitua 'Bem-vindo' por um texto ou elemento que confirme o login.
  });

  it('Should successfully list users', () => {
    // Verifica se o botão de listar produtos está visível e clica nele
    cy.get('[data-testid="listarProdutos"]', { timeout:4000 }).should('be.visible').click();

    // Verifica que a página de listagem de produtos foi carregada
    cy.contains('Lista dos Produtos').should('be.visible');
  });
});