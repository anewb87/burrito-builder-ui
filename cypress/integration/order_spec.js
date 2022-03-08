describe('Placing an order flow', () => {

    beforeEach(()=> {
        cy.intercept('GET', 'http://localhost:3001/api/v1/orders',
        { fixture: 'orders.json'})

        cy.visit('http://localhost:3000')
    })

    it('Should have a landing page that displays a form and orders already made', () => {
        cy.url()
            .should('eq', 'http://localhost:3000/')
            .get('h1')
            .should('have.text', 'Burrito Builder')
            .get('input')
            .should('have.attr', 'placeholder', 'Name')
            .get('[data-testid=food-btn]')
            .should('have.length', 12)
            .get('p')
            .first()
            .should('have.text', 'Order: Nothing selected')
            .get('[data-testid=submit-btn]')
            .should('be.visible')
            .get('[data-testid=cards]')
            .should('have.length', 2)
            .get('[data-testid=cards]')
            .first()
            .contains('Captain America')
            .get('[data-testid=cards]')
            .eq(1)
            .contains('Wonder Woman')
    });

  

});