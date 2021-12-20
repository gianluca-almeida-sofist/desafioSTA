import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"
import pageObjectProdutos from "../../support/PageObjects/pageObjectProdutos";
import pageObjectLogin from "../../support/PageObjects/pageObjectLogin";



//Mensagens de Erro
var msgErroDadosErrados = 'Epic sadface: Username and password do not match any user in this service';
var msgErroSenhaAusente = 'Epic sadface: Password is required';
var msgErroUsuarioBloqueado = 'Epic sadface: Sorry, this user has been locked out.';
var msgErroUsuarioAusente = 'Epic sadface: Username is required';
//Credenciais
var usuarioCorreto = 'standard_user';
var senhaCorreta = 'secret_sauce';
var firstName = 'Fulano';
var lastName = 'DeTal'
var zipCode = '11111111';


//Cadastro Login

Given(/^realizei o login com o usuario "([^"]*)" e a senha "([^"]*)"$/, (usuario,senha) => {
	cy.visit('https://www.saucedemo.com/');
	switch (true) {
		case (usuario ==""):
			cy.get('[data-test="password"]').type(senha);
			break;
		case (senha == ""):
			cy.get('[data-test="username"]').type(usuario);
			break;
		default:
			cy.get('[data-test="username"]').type(usuario);
			cy.get('[data-test="password"]').type(senha);
	}	
});


When(/^pressionar o botão de login$/, () => {
	cy.get('[data-test="login-button"]').click();
});


// Verificação de páginas

Then(/^deve exibir a página de produtos$/, () => {
	cy.get('.title').should('have.text', 'Products');
    cy.get('[data-test="product_sort_container"]').should('exist');
    cy.get('#item_1_img_link > .inventory_item_img').should('not.have.attr', 'src', '/static/media/sl-404.168b1cce.jpg')
});

Then(/^deve exibir a página de produtos com problema$/, () => {
	cy.get('.title').should('have.text', 'Products');
	cy.get('[data-test="product_sort_container"]').should('exist');
	cy.get('#item_1_img_link > .inventory_item_img').should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg')
});



//Verificação mensagem de erro

Then(/^deve exibir a mensagem de erro Epic sadface: Username and password do not match any user in this service$/, () => {
	cy.get('[data-test="error"]').should('have.text', msgErroDadosErrados);
});

Then(/^deve exibir a mensagem de erro Epic sadface: Password is required$/, () => {
	cy.get('[data-test="error"]').should('have.text', msgErroSenhaAusente);
});

Then(/^deve exibir a mensagem de erro Epic sadface: Sorry, this user has been locked out.$/, () => {
	cy.get('[data-test="error"]').should('have.text', msgErroUsuarioBloqueado);
});

Then(/^deve exibir a mensagem de erro Epic sadface: Username is required$/, () => {
	cy.get('[data-test="error"]').should('have.text', msgErroUsuarioAusente);
});


//Caminho Feliz 

Given(/^realizei o login corretamente$/, () => {
	cy.visit('https://www.saucedemo.com/');
	pageObjectLogin.fazerLogin(usuarioCorreto, senhaCorreta);
});

When(/^adicionei "([^"]*)" produtos ao carrinho$/, (qtd) => {
	pageObjectProdutos.adicionarProdutosAoCarrinho(qtd);
	cy.get('.shopping_cart_link').click();
	cy.get('[data-test="checkout"]').click();
});

When(/^preenchi os campos de informação corretamente$/, () => {
	cy.get('[data-test="firstName"]').type(firstName);
    cy.get('[data-test="lastName"]').type(lastName);
    cy.get('[data-test="postalCode"]').type(zipCode);
	cy.get('[data-test="continue"]').click();
});

When(/^pressionar o botão Finish$/, () => {
	cy.get('[data-test="finish"]').click();
});

Then(/^deve exibir a página de compra finalizada$/, () => {
	cy.get('.title').should('have.text', 'Checkout: Complete!')
    cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER')
});