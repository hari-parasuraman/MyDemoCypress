/// <reference types="cypress" />

it('should be able to add a new Todo to the list', () => {
    // cy.visit('http://todomvc-app-for-testing.surge.sh/')

    cy.visit('https://www.flaconi.at/')
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
    })
    cy.contains('Anmelden').click()
    // cy.get('.sc-fzoydu').click()

// cy.get('.new-todo', {timeout: 6000}).type("Clean room{enter}")

// cy.get('.toggle').click()
})