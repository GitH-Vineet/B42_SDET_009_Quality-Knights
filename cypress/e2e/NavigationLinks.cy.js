import Navigation from '../e2e/PageObjects/NavigationLinks'

describe('Navigation Links', () => {
    it('Validate the Navigation Links', () => {
        
        cy.visit("https://practicesoftwaretesting.com/");

        const nvg = new Navigation();
        
        nvg.getGithub();
        nvg.getBarnimages();
        nvg.getBarnimages();
        nvg.getUnsplash();
    });
});