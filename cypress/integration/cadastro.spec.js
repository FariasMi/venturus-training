/// <reference types="cypress" />

import SingUpPage from '../pages/SingUpPage';

describe('Cadastro',()=> {
    before(()=>{
        cy.log('Tudo aqui é executado uma única vez ANTES DE TODOS os casos de teste');
    });
    
    beforeEach(function(){
        cy.fixture('delivery').then((d)=>{
            this.deliver = d;
        });
    });

    after(()=>{
        cy.log('Tudo aqui é executado uma única vez DEPOIS DE TODOS os casos de teste');
    });

    afterEach(()=>{
        cy.log('Tudo aqui é executado uma única vez DEPOIS DE CADA  caso de teste');
    });

    it('Cadastrar entregador',function() {     
        
        let singup = new SingUpPage();
        
        singup.go();
        singup.fillForm(this.deliver.singup);
        singup.submit();
         
        singup.modalAlertShouldBe();       
         
         const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois em breve retornamos o contato';
         singup.modalAlertShouldBe(expectedMessage);
        

    });

    it('CPF incorreto', function() {

        let singup = new SingUpPage();

        singup.go();
        singup.fillForm(this.deliver.cpf_incorreto);
        singup.submit();

        singup.alertErrorShouldBe('Oops! CPF inválido')
    });


    it('Email incorreto', function(){

   
        let singup = new SingUpPage();

        singup.go();
        singup.fillForm(this.deliver.email_inv);
        singup.submit();

        singup.alertErrorShouldBe('Oops! Email com formato inválido.');

    });
    
});

