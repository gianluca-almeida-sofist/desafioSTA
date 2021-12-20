class CarrinhoPage{
    confirmarPaginaDeCarrinho(){
        cy.get('.title').should('have.text', 'Your Cart')

        cy.get('.cart_quantity_label').should('exist')

        cy.get('.cart_desc_label').should('exist')
    }

    fazerCheckOut(){
        cy.get('[data-test="checkout"]').click();
    }
}

export default new CarrinhoPage;