import Categories_filters from "../e2e/PageObjects/Categories_Filters"

describe('Categories and Filters', () => {

    it('It should render the Categories and Filters', () => {

      cy.visit("https://practicesoftwaretesting.com/");
        
      const cf = new Categories_filters();

      cf.selectFilter();
      cf.selectCategory();
      cf.selectProduct ();

    });
});