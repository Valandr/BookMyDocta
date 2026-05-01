describe('health page', () => {
  it('shows API status card', () => {
    cy.intercept('GET', '**/api/health', {
      statusCode: 200,
      body: {
        status: 'ok',
        service: 'bookmydocta-backend',
        version: '1.0.0',
        database: 'up',
        timestamp: '2026-05-01T14:11:00.881Z',
      },
    }).as('health');
    cy.visit('/');
    cy.wait('@health');
    cy.contains('Backend connectivity').should('be.visible');
    cy.contains('bookmydocta-backend', { timeout: 10000 }).should('be.visible');
  });
});
