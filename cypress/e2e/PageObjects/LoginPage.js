class Login{

    setEmail(email)
    {
        cy.get('[id="email"]').type(email);
    }

    setPassword(password)
    {
        cy.get('[id="password"]').type(password);
    }

    loginButton(btnlogin){
        cy.get(".btnSubmit").click({force:true});
    }

}

export default Login;