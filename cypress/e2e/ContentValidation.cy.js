import Content_Validation from "../e2e/PageObjects/ContentValidation";

describe('Content Validation', () => {
    it('Validate the Contents', () => {
        cy.visit("https://practicesoftwaretesting.com/");

        const conVal = new Content_Validation();

        conVal.checkPagetitle();
        conVal.checkHeader();
        conVal.checkDescription();


    });
});