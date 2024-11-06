import 'cypress-wait-until';


  /*describe('Enter to Home', () => {
    before(() => {
      cy.visit('/es/login');
      cy.get('circle.sm_location_barcelona').click({ force: true });
      cy.wait(2000);
  
      // Aquí validamos que la URL se redirija correctamente
      cy.url().should('include', '/es/login/login-form');
      cy.log('URL redirigida correctamente');
    });
  
    it('Ingreso a Autenticación', () => {
      cy.get('#username').type('grisel.ortiz');
      cy.get('#password').type('*k85KE61');
      cy.get('button.js-login.btn.btonEnter').click();
      cy.log('Formulario enviado');
    });
  });
    */

  describe('Enter to Home', () => {
    before(() => {
      cy.visit('http://k8s40.qa.bcn.zi.cloud:32210/es/login');

      cy.get('.sm_location_barcelona').eq(0).scrollIntoView().click({ force: true });

      cy.get('#username').type('grisel.ortiz');
      cy.get('#password').type('*k85KE61');
      cy.get('.js-login.btn.btonEnter').click({ force: true });

      //cy.url().should('include', '/es/modules');
      cy.visit('http://k8s40.qa.bcn.zi.cloud:32210/es/modules');
     
    });
  

    it('should login and redirect to the home page', () => {
      cy.get('div').should('contain', '.modules');
    });

})