/// <reference types="cypress" />

import SingUpPage from '../pages/SingUpPage';

describe('Cadastro',()=> {

    it('Cadastrar entregador',() => {     
        

         let deliver = {
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

        let singup = new SingUpPage();
        
        singup.go();
        singup.fillForm(deliver);
        singup.submit();
         
        singup.modalAlertShouldBe();       
         
         const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois em breve retornamos o contato';
         singup.modalAlertShouldBe(expectedMessage);
        

    });

    it('CPF incorreto', () => {

        let deliver = {
            nome: 'Daniel',
            cpf: '000000414AA',
            email: 'daniel@test.com',
            whatsapp: '11999999999',
            endereco:{
                cep:'76987004',
                rua:'Rua Sergio Almir Carniel',
                numero:'200',
                complemento:'Casa',
                bairro:'Jardim Eldorado',
                cidadeUF:'Vilhena/RO'
            },
            metodo_entrega:'Moto',
            cnh:'cnh-digital.jpg'
        }

        var singup = new SingupPage();

        singup.go();
        singup.fillForm(deliver);
        singup.submit();

        singup.alertErrorShouldBe('Oops! CPF inválido')
    });


    it.only('Email incorreto', () => {

        let deliver = {
            nome: 'Daniel',
            cpf: '00000041414',
            email: 'daniel.test.com',
            whatsapp: '11999999999',
            endereco:{
                cep:'76987004',
                rua:'Rua Sergio Almir Carniel',
                numero:'200',
                complemento:'Casa',
                bairro:'Jardim Eldorado',
                cidadeUF:'Vilhena/RO'
            },
            metodo_entrega:'Moto',
            cnh:'cnh-digital.jpg'
        }

        var singup = new SingupPage();

        singup.go();
        singup.fillForm(deliver);
        singup.submit();

        singup.alertErrorShouldBe('Oops! Email com formato inválido.')
    });
    
});

