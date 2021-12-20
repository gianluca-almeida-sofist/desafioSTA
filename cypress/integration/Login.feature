Feature: Login e Caminho Feliz

    Testar Login com diferentes senhas e usuarios assim como um caminho feliz de compra

    #1
    Scenario: Fazer Login com usuário correto e senha correta
        Given realizei o login com o usuario "standard_user" e a senha "secret_sauce"
        When pressionar o botão de login
        Then deve exibir a página de produtos

    #2
    Scenario: Fazer Login com usuário correto e senha incorreta
        Given realizei o login com o usuario "standard_user" e a senha "incorreta"
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Username and password do not match any user in this service

    #3
    Scenario: Fazer Login com usuário correto e senha ausente
        Given realizei o login com o usuario "standard_user" e a senha ""
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Password is required
 
    #4
    Scenario: Fazer Login com usuário bloqueado e senha correta
        Given realizei o login com o usuario "locked_out_user" e a senha "secret_sauce"
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Sorry, this user has been locked out.

    #5
    Scenario: Fazer Login com usuário bloqueado e senha incorreta
        Given realizei o login com o usuario "locked_out_user" e a senha "incorreta"
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Username and password do not match any user in this service
 
    #6
    Scenario: Fazer Login com usuário bloqueado e senha ausente
        Given realizei o login com o usuario "locked_out_user" e a senha ""
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Password is required
 
    #7
    Scenario: Fazer Login com usuário com problema e senha correta
        Given realizei o login com o usuario "problem_user" e a senha "secret_sauce"
        When pressionar o botão de login
        Then deve exibir a página de produtos com problema

    #8
    Scenario: Fazer Login com usuário com problema e senha incorreta
        Given realizei o login com o usuario "problem_user" e a senha "incorreta"
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Username and password do not match any user in this service
 
    #9
    Scenario: Fazer Login com usuário com problema e senha ausente
        Given realizei o login com o usuario "problem_user" e a senha ""
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Password is required

    #10
    Scenario: Fazer Login com usuário incorreto e senha correta
        Given realizei o login com o usuario "incorreto" e a senha "secret_sauce"
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Username and password do not match any user in this service
 
    #11
    Scenario: Fazer Login com usuário incorreto e senha ausente
        Given realizei o login com o usuario "incorreto" e a senha ""
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Password is required
 
    #12
    Scenario: Fazer Login com usuário ausente e senha correta
        Given realizei o login com o usuario "" e a senha "secret_sauce"
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Username is required
 
    #13
    Scenario: Fazer Login com usuário ausente e senha incorreta
        Given realizei o login com o usuario "" e a senha "incorreta"
        When pressionar o botão de login
        Then deve exibir a mensagem de erro Epic sadface: Username is required
 
    #14
    Scenario: Fazer o Caminho Feliz de Uma Compra
        Given realizei o login corretamente
        And adicionei "2" produtos ao carrinho
        And preenchi os campos de informação corretamente
        When pressionar o botão Finish
        Then deve exibir a página de compra finalizada

