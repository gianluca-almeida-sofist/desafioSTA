class PageCompraFinalizada{

    confirmarPaginaDeCompraFinalizada(){
        cy.get('.title').should('have.text', 'Checkout: Complete!');
        cy.get('.complete-header').should('have.text', 'THANK YOU FOR YOUR ORDER');
    }

}

export default new PageCompraFinalizada;