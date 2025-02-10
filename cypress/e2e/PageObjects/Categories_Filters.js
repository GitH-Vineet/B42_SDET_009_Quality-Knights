class Categories_filters{

    selectCategory()
    {
        cy.get('[class="nav-link dropdown-toggle"]').should("be.visible");
        cy.get('[routerlink="/category/power-tools"]').should("be.visible").click();
    }

    selectProduct(){
        cy.get('(//h5[@class="card-title"])[1]').should("be.visible").should("have.text","Sheet Sander")
    }

    selectFilter(){
        cy.get('[name="category_id"]').check().should("be.checked");
    }

}

export default Categories_filters;