class formSubmission{

    selectFirstname(firstname){
        cy.get('[id="first_name"]').type(firstname);
    }

    selectLastname(lastname){
        cy.get('[id="last_name"]').type(lastname);
    }

    selectEmail(email){
        cy.get('[id="email"]').type(email);
    }

    selectSubject(){
        cy.get('[id="subject"]').select("Return");
    }

    writeMessage(message){
        cy.get('[id="message"]').type(message);
    }

    submitButton(){
        cy.get('.btnSubmit').click();
    }

    confirmMessage(){
        cy.get('[class="alert alert-success mt-3"]').should("have.text"," Thanks for your message! We will contact you shortly. ")
    }

}
export default formSubmission;