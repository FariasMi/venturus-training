/// <reference types="cypress" />



describe('selector',()=>{
    
    it('validando os seletores css',()=>{
        cy.viewport(1440,900);
        
        cy.visit('https://buger-eats-qa.vercel.app');
        cy.get('#page-home main h1').should('have.text','Seja um parceiro entregador pela Buger Eats');

        cy.get('a[href="/delive"]').click();


        //by Tag
        cy.get('input');


        //by ID

        cy.get('#page-deliver');

        //by class
        cy.get('.field-group');


        //by class value
        cy.get('[class="alert-warning"]');


        //by attribute name
        cy.get('[placeholder]');


        //by attribute Name and value
        cy.get('placeholder="CPF somente números"');

        //by tag name and attribute with name
        cy.get('input[placeholder="Nome completo"]');

        //two different attributes
        cy.get('[placeholder ="E-mail"][type="text]');

        //















    });
});