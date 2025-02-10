import Login from "../e2e/PageObjects/LoginPage";

describe('Login Page', () => {

    it('Login with valid credentials', () => {
        cy.visit("https://practicesoftwaretesting.com/auth/login");

        const ln = new Login();
        ln.setEmail("test.masai@gmail.com");
        ln.setPassword("Test@123");
        ln.loginButton();
     });

     it('Login with invalid credentials', () => {
        cy.visit("https://practicesoftwaretesting.com/auth/login");

        const ln = new Login();
        ln.setEmail("masai@gmail.com");
        ln.setPassword("Test123");
        ln.loginButton();
     });

});