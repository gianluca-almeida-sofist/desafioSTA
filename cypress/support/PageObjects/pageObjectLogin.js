class LoginPage{

    fazerLogin(usuario, senha){
        cy.get('[data-test="username"]').type(usuario);
        cy.get('[data-test="password"]').type(senha);
        cy.get('[data-test="login-button"]').click();
    }

    fazerLoginSemSenha(usuario){
        cy.get('[data-test="username"]').type(usuario);
        cy.get('[data-test="login-button"]').click();
    }

    fazerLoginSemUsuario(senha){
        cy.get('[data-test="password"]').type(senha);
        cy.get('[data-test="login-button"]').click();
    }

    verificarMensagemErro(msgErro){
        cy.get('[data-test="error"]').should('have.text', msgErro);
    }

}

export default new LoginPage;