describe('health page', () => {
  it('shows API status card', () => {
    cy.intercept('GET', '**/api/health').as('health');
    cy.visit('/');
    cy.wait('@health').its('response.statusCode').should('eq', 200);
    cy.contains('Backend connectivity').should('be.visible');
    cy.contains('bookmydocta-backend', { timeout: 10000 }).should('be.visible');
  });
});
