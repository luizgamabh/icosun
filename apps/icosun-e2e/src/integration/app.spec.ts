import { getGreeting } from '../support/app.po';

describe('icosun', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to icosun!');
  });
});
