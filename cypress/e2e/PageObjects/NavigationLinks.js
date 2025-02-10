class Navigation{

    getGithub(){
        cy .get('[target="_blank"]').click({multiple:true});
    }

    getPrivacypolicy(){
        cy.get('[routerlink="privacy"]').click({multiple:true});
    }

    getBarnimages(){
        cy.get('[href="https://unsplash.com/@barnimages"]').click({multiple:true});
    }

    getUnsplash(){
        cy.get('[href="https://unsplash.com/photos/t5YUoHW6zRo"]').click({multiple:true});
    }
}
export default Navigation;