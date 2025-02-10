class Registration{

    setFirstname(firstname){
        cy.get('#first_name').type(firstname);
    }

    setLastname(lastname){
        cy.get('#last_name').type(lastname);
    }

    setDob(){
        cy.get('#dob').invoke('val', '2025-02-10').trigger('change');
    }

    setAddress(address){
        cy.get('#address').type(address);
    }

    setPostcode(postcode){
        cy.get('#postcode').type(postcode);
    }

    setCity(city){
        cy.get('#city').type(city);
    }

    setState(state){
        cy.get('#state').type(state);
    }

    setCountry(country){
        cy.get('#country').type(country);
    }

    setPhone(phone){
        cy.get('#phone').type(phone);
    }

    setEmail(email){
        cy.get('#email').type(email);
    }

    setPassword(password){
        cy.get('#password').type(password);
    }

    btnSubmit(){
        cy.get('[class="btnSubmit mb-3"]').click({force:true});
    }


}

export default Registration;