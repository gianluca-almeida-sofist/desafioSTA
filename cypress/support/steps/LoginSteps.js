import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

//Mensagens de Erro
var msgErroDadosErrados = 'Epic sadface: Username and password do not match any user in this service';
var msgErroSenhaAusente = 'Epic sadface: Password is required';
var msgErroUsuarioBloqueado = 'Epic sadface: Sorry, this user has been locked out.';
var msgErroUsuarioAusente = 'Epic sadface: Username is required';
//Credenciais
var usuarioCorreto = 'standard_user';
var senhaCorreta = 'secret_sauce';
var senhaIncorreta = 'incorreta';
var usuarioBloquado = 'locked_out_user';
var usuarioComProblema = 'problem_user';
var usuarioIncorreto = 'incorreto';
var firstName = 'Fulano';
var lastName = 'DeTal'
var zipCode = '11111111';

Given(/^Acessei a pagina de login$/, () => {
	cy.visit('https://www.saucedemo.com/');
});

And(/^Inseri o Usuário Padrão corretamente$/, () => {
	cy.get('[data-test="username"]').type(usuarioCorreto);
});

And(/^inseri a senha correta$/, () => {
	cy.get('[data-test="password"]').type(senhaCorreta);
});

When(/^pressionar o botão de login$/, () => {
	cy.get('[data-test="login-button"]').click();
});

Then(/^deve exibir a página de produtos$/, () => {
	cy.get('.title').should('have.text', 'Products');
    cy.get('[data-test="product_sort_container"]').should('exist');
    cy.get('#item_1_img_link > .inventory_item_img').should('not.have.attr', 'src', '/static/media/sl-404.168b1cce.jpg')
});
