class Categories_filters{

    selectCategory()
    {
        cy.get('[class="nav-link dropdown-toggle"]').should("be.visible");
        cy.get('[routerlink="/category/power-tools"]').click({force:true});
    }

    selectProduct(){
        cy.get('h5[class="card-title"]').eq(0).should("be.visible")
    }

    selectFilter(){
        cy.get('input[type="checkbox"]').eq(1).click().should("be.checked");
    }

}

export default Categories_filters;
