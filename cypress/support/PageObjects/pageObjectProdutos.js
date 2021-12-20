class ProdutosPage{

    confirmarPaginaProdutos(){
        cy.get('.title').should('have.text', 'Products');
        cy.get('[data-test="product_sort_container"]').should('exist');
        cy.get('#item_1_img_link > .inventory_item_img').should('not.have.attr', 'src', '/static/media/sl-404.168b1cce.jpg')
    }

    confirmarPaginaProdutosComErro(){
        cy.get('.title').should('have.text', 'Products');
        cy.get('[data-test="product_sort_container"]').should('exist');
        cy.get('#item_1_img_link > .inventory_item_img').should('have.attr', 'src', '/static/media/sl-404.168b1cce.jpg')
    }

    adicionarProdutosAoCarrinho(n){
        switch(n){
            case 1:
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
            break;

            case 2:
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
                break;
            
            case 3:
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
                break;

            case 4:
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
                break;

            case 5:
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
                break;

            case 6:
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click();
                cy.get('[data-test="add-to-cart-sauce-labs-onesie"]').click();
                cy.get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click();
                break;
            
            default:
                cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        }
    }

    abrirCarrinho(){
        cy.get('.shopping_cart_link').click();
    }

}
//<img alt="Sauce Labs Fleece Jacket" class="inventory_item_img" src="/static/media/sl-404.168b1cce.jpg"></img>
export default new ProdutosPage;