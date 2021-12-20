/// <reference types="cypress"/>

import pageObjectCarrinho from "../support/PageObjects/pageObjectCarrinho";
import pageObjectCheckOut from "../support/PageObjects/pageObjectCheckOut";
import pageObjectCompraFinalizada from "../support/PageObjects/pageObjectCompraFinalizada";
import pageObjectLogin from "../support/PageObjects/pageObjectLogin";
import pageObjectOverview from "../support/PageObjects/pageObjectOverview";
import pageObjectProdutos from "../support/PageObjects/pageObjectProdutos";

describe('Teste Login', () => {

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

    beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
      })

    
    it('deveSerPossivelLogarComUsuarioESenhaCorretos', () => {
  
    pageObjectLogin.fazerLogin(usuarioCorreto, senhaCorreta);
    
    pageObjectProdutos.confirmarPaginaProdutos();

    });

    it('naoDeveSerPossivelLogarComUsuarioCorretoESenhaIncorreta', () => {
        
        pageObjectLogin.fazerLogin(usuarioCorreto, senhaIncorreta);

        pageObjectLogin.verificarMensagemErro(msgErroDadosErrados);
    });

    it('naoDeveSerPossivelLogarComUsuarioCorretoESenhaAusente', () => {
        
        pageObjectLogin.fazerLoginSemSenha(usuarioCorreto);

        pageObjectLogin.verificarMensagemErro(msgErroSenhaAusente);

    });

    it('naoDeveSerPossivelLogarComUsuarioBloqueadoESenhaCorreta', () => {
        
        pageObjectLogin.fazerLogin(usuarioBloquado, senhaCorreta);

        pageObjectLogin.verificarMensagemErro(msgErroUsuarioBloqueado);
    });

    it('naoDeveSerPossivelLogarComUsuarioBloqueadoESenhaIncorreta', () => {
        
        pageObjectLogin.fazerLogin(usuarioBloquado, senhaIncorreta);

        pageObjectLogin.verificarMensagemErro(msgErroDadosErrados);
    });

    it('naoDeveSerPossivelLogarComUsuarioBloqueadoESenhaAusente', () => {
        
        pageObjectLogin.fazerLoginSemSenha(usuarioBloquado);

        pageObjectLogin.verificarMensagemErro(msgErroSenhaAusente);
    });

    it('deveAparecerProblemaNaPaginaDeProdutosAoLogarComUsuarioComProblemaESenhaCorreta', () => {
        
        pageObjectLogin.fazerLogin(usuarioComProblema, senhaCorreta);

        pageObjectProdutos.confirmarPaginaProdutosComErro();

        
    });

    it('naoDeveSerPossivelLogarComUsuarioComProblemaESenhaIncorreta', () => {
        
        pageObjectLogin.fazerLogin(usuarioComProblema, senhaIncorreta);

        pageObjectLogin.verificarMensagemErro(msgErroDadosErrados);
 
    });

    it('naoDeveSerPossivelLogarComUsuarioComProblemaESenhaAusente', () => {
        
        pageObjectLogin.fazerLoginSemSenha(usuarioComProblema);

        pageObjectLogin.verificarMensagemErro(msgErroSenhaAusente);
 
    });

    it('naoDeveSerPossivelLogarComUsuarioIncorretoESenhaCorreta', () => {
        
        pageObjectLogin.fazerLogin(usuarioIncorreto, senhaCorreta);

        pageObjectLogin.verificarMensagemErro(msgErroDadosErrados);
 
    });

    it('naoDeveSerPossivelLogarComUsuarioIncorretoESenhaAusente', () => {
        
        pageObjectLogin.fazerLoginSemSenha(usuarioIncorreto);

        pageObjectLogin.verificarMensagemErro(msgErroSenhaAusente);
 
    });

    it('naoDeveSerPossivelLogarComUsuarioAusenteESenhaCorreta', () => {
        
        pageObjectLogin.fazerLoginSemUsuario(senhaCorreta);

        pageObjectLogin.verificarMensagemErro(msgErroUsuarioAusente);
 
    });

    it('naoDeveSerPossivelLogarComUsuarioAusenteESenhaIncorreta', () => {
        
        pageObjectLogin.fazerLoginSemUsuario(senhaIncorreta);

        pageObjectLogin.verificarMensagemErro(msgErroUsuarioAusente);
 
    });

    it('deveSerPossivelRealizarUmaCompraDeDoisProdutosAoLogarCorretamente', () => {
        
        pageObjectLogin.fazerLogin(usuarioCorreto, senhaCorreta);

        pageObjectProdutos.adicionarProdutosAoCarrinho(2);

        pageObjectProdutos.abrirCarrinho();

        pageObjectCarrinho.confirmarPaginaDeCarrinho();

        pageObjectCarrinho.fazerCheckOut();

        pageObjectCheckOut.preencherCheckOut(firstName, lastName, zipCode);

        pageObjectOverview.confirmarValorASerPago();

        pageObjectOverview.finalizarPedido();

        pageObjectCompraFinalizada.confirmarPaginaDeCompraFinalizada()

 
    });


});