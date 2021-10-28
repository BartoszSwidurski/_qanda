describe('Ask question', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('When signed in and ask a valid question, the question should successfully save', () => {
    cy.contains('Q & A');
    cy.contains('Unanswered Questions');
    cy.contains('Sign In').click();
    cy.url().should('include', 'auth0');
    cy.findByLabelText('Email address')
      .type('dollarwidur@gmail.com')
      .should('have.value', 'dollarwidur@gmail.com');
    cy.findByLabelText('Password')
      .type('Testtest1')
      .should('have.value', 'Testtest1');

    cy.get('button[type="submit"][value="default"]').click();

    // cy.contains('Login with your own user').parent('form').within(...);
    // cy.get('form').submit();
    cy.contains('Unanswered Questions');

    cy.contains('Ask a question').click();
    cy.contains('Ask a question');

    var title = 'title test';
    var content = 'Lots and lots and lots and lots and lots of content test';
    cy.findByLabelText('Title').type(title).should('have.value', title);
    cy.findByLabelText('Content').type(content).should('have.value', content);
    cy.contains('Submit Your Question').click();
    cy.contains('Your question was successfully submitted');
  });
});
