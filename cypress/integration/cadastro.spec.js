/// <reference types="cypress" />


describe('Cadastro',()=> {
    it('Cadastrar entregador',() => {
       
        cy.visit('/');

         cy.get('a[href="/deliver"]').click();
        
         cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas');

         let entregador = {
            nome: 'Tanjiro Kamado',
            cpf: '20504909096',
            email:'tanjiro.kamado@email.com',
            whatsapp:'11995003345',   
            endereco:{
                cep:'76987004',
                rua:'Rua Sergio Almir Carniel',
                numero:200,
                complemento:'Casa',
                bairro:'Jardim Eldorado',
                cidadeUF:'Vilhena/RO'
            },
            metodo_entrega:'Moto',
            cnh:'cnh.jpg'

         }

         cy.get('input[name = "fullName"]').type(entregador.nome);
         cy.get('input[name = "cpf"]').type(entregador.cpf);
         cy.get('input[name = "email"]').type(entregador.email);
         cy.get('input[name = "whatsapp"]').type(entregador.whatsapp);

         cy.get('input[name="postalcode"]').type(entregador.endereco.cep);
         cy.get('[value="Buscar CEP"][type="button"]').click();

         cy.get('input[name="address-number"]').type(entregador.endereco.rua);
         cy.get('input[name="address-details"]').type(entregador.endereco.complemento);

         cy.get('input[name="address"]').should('have.value',entregador.endereco.rua);

         
         cy.contains('.delivery-method li', entregador.metodo_entrega).click();

         cy.get('input[accept^="image"]').attachFile(entregador.cnh);

         cy.get('button[type="submit"]').click();
         
         const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois em breve retornamos o contato';

         cy.get('.swa12-container .swa12-html-container').should('have.text',expectedMessage);



         

    });
});
