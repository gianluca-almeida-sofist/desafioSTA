class OverviewPage{
    confirmarValorASerPago(){

        cy.get('.summary_subtotal_label').then(($item) =>{
            var valorItem = ($item.text()).slice(-5);

            cy.get('.summary_tax_label').then(($taxa) =>{
                var valorTaxa = ($taxa.text()).slice(-4);
                var valorTotal = 'Total: $'+ (parseFloat(valorItem) + parseFloat(valorTaxa));

                cy.get('.summary_total_label').should(($total)=>{
                    expect($total.text()).eq(valorTotal);
                });
            });
        });      
    }

    finalizarPedido(){
        cy.get('[data-test="finish"]').click();
    }
}

export default new OverviewPage;