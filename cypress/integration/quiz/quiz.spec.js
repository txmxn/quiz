/// <reference types="cypress" />
import database from "../../../src/database.js";

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Tests der Quiz-Logik', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:8080')
  })

  it('Beginne mit der Welcome-Seite', () => {
    cy.get('[id=welcome-body] img');
  })

  it('Klicke die Fragen durch', () => {
    cy.get('[class=header-elements]').contains("START").click();
    cy.get('[id=body-part]');

    let score = 0;
    for (var i=0; i<10; i++) {
      cy.get('[class=score]').contains("Score: " + score);   
      cy.get('[id=question]').invoke('text').then(text => {
        const current = database.find(item => {
          return item.question == text
        });
        const right = current.answers[current.right];
        cy.get('[class=answer]').contains(right).click();
      });
      score +=3;
    }
    cy.get('[class=auswertung]').contains("30 von 30 Punkten erreicht");      
  })

  it('Klicke die Fragen durch plus eine falsche', () => {
    cy.get('[class=header-elements]').contains("START").click();
    cy.get('[id=body-part]');

      cy.get('[id=question]').invoke('text').then(text => {
        const current = database.find(item => {
          return item.question == text
        });
        const right = current.answers[current.right];
        const wrong = current.answers[(current.right + 1) % current.answers.length];
        cy.get('[class=answer]').contains(wrong).click();
        cy.get('[class=answer]').contains(right).click();

        cy.get('[class=score]').contains("Score: 2");
      });
  })

  it('Klicke die Fragen durch plus eine falsche', () => {
    cy.get('[class=header-elements]').contains("START").click();
    cy.get('[id=body-part]');

      cy.get('[id=question]').invoke('text').then(text => {
        const current = database.find(item => {
          return item.question == text
        });
        const right = current.answers[current.right];
        const wrong = current.answers[(current.right + 1) % current.answers.length];
        var score = 3;
        cy.get('[class=answer]').contains(wrong).click();
        score -= 1;
        cy.get('[class=answer]').contains(right).click();

        cy.get('[class=score]').contains("Score: " + score);
      });
  })

})
