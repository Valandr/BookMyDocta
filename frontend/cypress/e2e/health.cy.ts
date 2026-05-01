describe('health page', () => {
  it('shows API status card', () => {
    cy.visit('/');
    cy.contains('Backend connectivity');
    cy.contains('bookmydocta-backend');
  });
});
