import formSubmission from "../e2e/PageObjects/formSubmission";

describe('Form Submission', () => {
    it('Form Submission with Valid Data', () => {
        cy.visit("https://practicesoftwaretesting.com/contact");

        const fmSum = new formSubmission();

        fmSum.selectFirstname("Vineet");
        fmSum.selectLastname("Singh");
        fmSum.selectEmail("test.masai@gmail.com");
        fmSum.selectSubject();
        fmSum.writeMessage("I want to return this Product because the quality of the product is not that Good, So please retuen it ass soon as possilble");
        fmSum.submitButton();
        fmSum.confirmMessage();
    });


    it('Form Submission with Invalid Data', () => {
        cy.visit("https://practicesoftwaretesting.com/contact");

        const fmSum = new formSubmission();

        fmSum.selectFirstname("Vineet");
        fmSum.selectLastname("Singh");
        fmSum.selectEmail("test.masaigmail.com");
        fmSum.selectSubject();
        fmSum.writeMessage("I want to return this Product");
        fmSum.submitButton();
    });

});
