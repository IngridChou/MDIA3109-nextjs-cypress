describe('Home page', () => {

    it('fills radio button and checkbox', () => {
        // go to home page
        cy.visit('http://localhost:3000');

        // look for first radio button to checkmark it
        cy.get('[type="radio"]').check('radio1');

        // check the first checkbox on a page
        cy.get('[type="checkbox"]').first().check();
    })
    
    it('Have 3 li tags', () => {
        cy.visit('http://localhost:3000');

        cy.get('li.selected').should('have.length', 3);
    })

    it('BCIT text', () => {
        cy.visit('http://localhost:3000');

        cy.get('.school').should('include.text', 'BCIT');

        cy.get('.test').invoke('css', 'text-decoration').should('include', 'line-through');
        cy.get('.test').invoke('css', 'color').should('include', 'rgb(217, 217, 217)');
    })

})