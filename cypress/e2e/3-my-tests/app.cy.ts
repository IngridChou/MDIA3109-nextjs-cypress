describe('Navigation', () => {
    beforeEach(function() {
        console.log("Starting Navigation Test");
    })

    it('should navigate to about page and check text', () => {
        // start from index page
        cy.visit('http://localhost:3000');
        
        // find link with href atttribute containing about and click it
        cy.get('a[href*="about"]').click();
        // the new url should include "/about"
        cy.url().should('include', '/about');

        // The new page should contain an h1 with text "About page"
        cy.get('h1').contains('About Page');
    })
})