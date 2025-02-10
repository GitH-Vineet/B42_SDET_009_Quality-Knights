import Registration from "./PageObjects/RegistrationPage";

describe('Registration Page', () => {

    it('Registration Page', () => {
        cy.visit("https://practicesoftwaretesting.com/auth/register");

        const rgs = new Registration();

        rgs.setFirstname("Vineet");
        rgs.setLastname("Singh");
        rgs.setDob("20-07-2004");
        rgs.setAddress("New-Delhi");
        rgs.setPostcode("110013");
        rgs.setCity("New-Delhi");
        rgs.setState("Delhi");
        rgs.setCountry("India"); 
        rgs.setState("New-Delhi")
        rgs.setEmail("test.masai@gmail.com");
        rgs.setPassword("Test@123");
        rgs.btnSubmit();
    });

});