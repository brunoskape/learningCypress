 <reference types="cypress" />


Cypress.Commands.add('login', () => {
    cy.request({
      method: 'POST',
      url: `http://localhost:3004/login`,
      body: {
        username: 'foo@bar.com',
        password: '123'
      }
    }).its('body').then((body) => {
      const vuexData = { user: { authenticationData: { token: body.token } } }
      window.localStorage.setItem('vuex', JSON.stringify(vuexData))
    })


Cypress.Commands.add('loginGUI'), () => {
    cy.visit('https://wwwh3.tjrj.jus.br/hsegweb/faces/login.jsp')
    cy.get('#txtLogin').type(Cypress.env('username'))
    cy.get('#txtSenha').type(Cypress.env('password'))
    cy.get('#btnEnviar').click()



}


  })