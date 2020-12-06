describe("My First Test", () => {
    it("Does not do much!", () => {
        cy.visit("http://localhost:4200/")

        cy.get("#object-explore-a").click()
        cy.url().should('include', "object-explore")

        cy.get("#url-input")
            .type("https://asp.demosoft.me/json/organization.json")
            .should('have.value', "https://asp.demosoft.me/json/organization.json")

        cy.get("#get-button").click()
    })
})