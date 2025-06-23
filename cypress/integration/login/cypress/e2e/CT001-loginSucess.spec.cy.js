// Login test file
// Validates the user login functionality on the Serverest application.

describe('User login', () => {
  // Ensures the application starts in a clean state before each test.
  beforeEach(() => {
    // Opens the login page of the Serverest application.
    cy.visit('https://front.serverest.dev/');
  });

  it('Should successfully log in', () => {
    // Provides valid credentials and submits the login form.
    cy.get('input[name="email"]').type('afraniovargas@gmail.com');
    cy.get('input[name="password"]').type('Abe-123456');
    cy.get('button[type="submit"]').click();

    // Verifies that the user is logged in by checking the welcome message.
    cy.contains('Bem Vindo AfranioVargas').should('be.visible');
  });
});