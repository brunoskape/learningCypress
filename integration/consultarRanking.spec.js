 <reference types="cypress" />


describe('validacao HLTV', () => {
    beforeEach(() => cy.visit('https://www.hltv.org/'))      
    it('consultar ranking com sucesso', () => {
    

        cy.get(':nth-child(4) > .block').click()
        cy.get('.regional-ranking-header').contains('ranking')
    
    })

    it('consultar time', () => {
    

        cy.get('.navsearchinput').type('mi').type('br')
        cy.get('.navsearchicon > .fa').click()
        cy.get('.searchInput').should('have.value', 'mibr')
    
    })


})
