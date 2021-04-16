 <reference types="cypress" />

describe('Acessar Login', () => {
    beforeEach(() =>  { 
       cy.visit('http://automationpractice.com/index.php')
        
    })   

    it('cadastro com sucessso'), () => {
    
        cy.get('.login').click()
        cy.get('#email_create').type(Cypress.env('username'))
      
 
    }

 
    it('Produto inserido no carrinho com sucesso'), () => {
        cy.get('.sf-menu > :nth-child(2) > .sf-with-ul').click()
       
    }

})