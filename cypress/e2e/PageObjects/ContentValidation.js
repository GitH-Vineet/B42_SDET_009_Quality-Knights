class Content_Validation{
     
    checkPagetitle(){
        cy.title().should('eq', 'Practice Software Testing - Toolshop - v5.0');
    }

    checkHeader(){
        cy.get('[id="navbarSupportedContent"]').should('contain', 'Contact');
    }

    checkDescription(){
        cy.get('[class="nav-link dropdown-toggle"]').click();
        cy.get('[class="dropdown-item"]').contains('Hand Tools').click();//dropdown
        cy.get('(//h5[@data-test="product-name"])[1]').click();
        cy.get('[id="description"]').should("have.text"," Nunc vulputate, orci at congue faucibus, enim neque sodales nulla, nec imperdiet augue odio vel nibh. Etiam auctor, ligula quis gravida dictum, mi massa commodo ante, sollicitudin pulvinar nulla justo hendrerit lacus. Vivamus rutrum pharetra molestie. Fusce tristique odio tristique, elementum est eget, porttitor diam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas at ligula sed sapien porta pretium. Aenean cursus, magna in blandit consectetur, libero orci aliquet eros, et maximus nunc est eu dolor. Aenean non pellentesque eros. In sodales orci eget orci fringilla, vitae feugiat elit porta. Etiam aliquam, mi pretium tempus mattis, mauris ipsum gravida risus, at tempor nulla ipsum molestie ligula. Ut placerat, urna sit amet tincidunt volutpat, ex orci luctus purus, nec laoreet dolor sapien vel erat.");
    }
}
export default Content_Validation;
