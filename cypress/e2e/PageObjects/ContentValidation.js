class Content_Validation{
     
    checkPagetitle(){
        cy.title().should('eq', 'Practice Software Testing - Toolshop - v5.0');
    }

    checkHeader(){
        cy.get('[id="navbarSupportedContent"]').should('contain', 'Contact');
    }

    checkDescription(){
        cy.get('[class="nav-link dropdown-toggle"]').click();
        cy.get('[class="dropdown-item"]').contains('Hand Tools').click();
        cy.get('[class="card-title"]').eq(0).click({force:true});
        cy.get('[id="description"]').should("be.visible");
    }
}
export default Content_Validation;
