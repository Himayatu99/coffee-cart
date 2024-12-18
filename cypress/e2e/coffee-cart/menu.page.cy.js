/// <reference types="cypress" />
import { homepageselector } from "../../selectors/Homepage.cy";

import 'cypress-real-events';

const expectedUrl = Cypress.config('baseUrl');
describe('Coffee cart app shopping cart functionality', () => {
  beforeEach(() => {
    //Base url 
    cy.visit('/')
    //Verify the url
    cy.url().should('eq', expectedUrl);
  });
  it('Home page should be different products', () => {
    //*** Verify the different products  start*/ 
    //For Espresso
    cy.contains(homepageselector.productfirsttitle).should('contain', 'Espresso ')
    cy.contains(homepageselector.productfistvalue).should('contain', '$10.00')
    cy.get(homepageselector.productfirstbox).should('be.visible')

    //For Espresso Macchiato
    cy.contains(homepageselector.productsecondtitle).should('contain', 'Espresso Macchiato ')
    cy.contains(homepageselector.productsecondvalue).should('contain', '$12.00')
    cy.get(homepageselector.productsecondbox).should('be.visible')
    //For Cappuccino
    cy.contains(homepageselector.productthirdtitle).should('contain', 'Cappuccino ')
    cy.contains(homepageselector.productthirdvalue).should('contain', '$19.00')
    cy.get(homepageselector.productthirdbox).should('be.visible')
    //For Mocha 
    cy.contains(homepageselector.productfourtitle).should('contain', 'Mocha ')
    cy.contains(homepageselector.productfourvalue).should('contain', '$8.00')
    cy.get(homepageselector.productfourbox).should('be.visible')
    //For Flat White 
    cy.contains(homepageselector.productfivetitle).should('contain', 'Flat White ')
    cy.contains(homepageselector.productfivevalue).should('contain', '$18.00')
    cy.get(homepageselector.productfivebox).should('be.visible')
    //For Americano 
    cy.contains(homepageselector.productsixtitle).should('contain', 'Americano ')
    cy.contains(homepageselector.productsixvalue).should('contain', '$7.00')
    cy.get(homepageselector.productsixbox).should('be.visible')
    //For Cafe Latte 
    cy.contains(homepageselector.productseventitle).should('contain', 'Cafe Latte ')
    cy.contains(homepageselector.productsevenvalue).should('contain', '$16.00')
    cy.get(homepageselector.productsevenbox).should('be.visible')
    //For Espresso Con Panna 
    cy.contains(homepageselector.producteighttitle).should('contain', 'Espresso Con Panna ')
    cy.contains(homepageselector.producteightvalue).should('contain', '$14.00')
    cy.get(homepageselector.producteightbox).should('be.visible')
    //For Cafe Breve  
    cy.contains(homepageselector.productninetitle).should('contain', 'Cafe Breve ')
    cy.contains(homepageselector.productninevalue).should('contain', '$15.00')
    cy.get(homepageselector.productninebox).should('be.visible')
    //*** Verify the different products  end*/  


  })
  it('Scenario1 flow', () => {
    //**** For Mocha click , verify text start ****
    cy.contains(homepageselector.productfourtitle).should('contain', 'Mocha ')
    cy.contains(homepageselector.productfourvalue).should('contain', '$8.00')
    cy.get(homepageselector.productfourbox).should('be.visible')
    cy.get(homepageselector.productfourbox).click()
    cy.get(homepageselector.cart).should('contain', 'cart (1)')
    cy.get(homepageselector.total).should('contain', 'Total: $8.00')
    cy.get(homepageselector.total).realHover()
    cy.get(homepageselector.Verifyproductbyhover) // Select the item in the cart preview
      .and('contain.text', 'Mocha')
      .and('contain.text', ' x 1');

    //**** For Mocha click , verify text end ****

    //**** For Americano  click , verify text start ****
    cy.contains(homepageselector.productsixtitle).should('contain', 'Americano ')
    cy.contains(homepageselector.productsixvalue).should('contain', '$7.00')
    cy.get(homepageselector.productsixbox).should('be.visible')
    cy.get(homepageselector.productsixbox).click()
    cy.get(homepageselector.cart).should('contain', 'cart (2)')
    cy.get(homepageselector.total).should('contain', 'Total: $15.00')
    cy.get(homepageselector.total).realHover()
    cy.get(homepageselector.Verifyproductbyhover) // Select the item in the cart preview
      .and('contain.text', 'Americano')
      .and('contain.text', ' x 1');
    //**** For Americano  click , verify text end ****

    //**** Again click on Mocha ****
    cy.contains(homepageselector.productfourtitle).should('contain', 'Mocha ')
    cy.contains(homepageselector.productfourvalue).should('contain', '$8.00')
    cy.get(homepageselector.productfourbox).should('be.visible')
    cy.get(homepageselector.productfourbox).click()
    cy.get(homepageselector.cart).should('contain', 'cart (3)')
    cy.get(homepageselector.total).should('contain', 'Total: $23.00')
    cy.get(homepageselector.total).realHover()
    cy.get(homepageselector.Verifyproductbyhover) // Select the item in the cart preview
      .and('contain.text', 'Mocha')
      .and('contain.text', ' x 2');

    //**** Again click on Mocha  end ****

    //**** For Espresso  click , verify text end ****
    cy.contains(homepageselector.productfirsttitle).should('contain', 'Espresso ')
    cy.contains(homepageselector.productfistvalue).should('contain', '$10.00')
    cy.get(homepageselector.productfirstbox).should('be.visible')
    // click on it 3 times
    cy.get(homepageselector.productfirstbox).then(($el) => {
      for (let i = 0; i < 2; i++) {
        cy.wrap($el).click();
      }
    });
    cy.get(homepageselector.cart).should('contain', 'cart (5)')
    cy.get(homepageselector.total).should('contain', 'Total: $43.00')
    cy.get(homepageselector.productfirstbox).click().wait(2000)
    cy.get(homepageselector.cart).should('contain', 'cart (6)')
    cy.get(homepageselector.total).should('contain', 'Total: $53.00')
    // 'It's your lucky day! Get an extra cup'
    cy.get(homepageselector.extracup).should('be.visible')
    cy.get(homepageselector.extracuptitle).should('contain', "It's your lucky day! Get an extra cup of Mocha for $4.")
    //click on yes of course
    cy.get(homepageselector.yesbtn).should('contain', 'Yes, of course!').click()

    cy.get(homepageselector.cart).should('contain', 'cart (7)')

    cy.get(homepageselector.total).should('contain', 'Total: $57.00')

    cy.get(homepageselector.Verifyproductbyhover) // Select the item in the cart preview
      .and('contain.text', '(Discounted) Mocha')
      .and('contain.text', ' x 1');

    cy.get(homepageselector.total).click()

    cy.get(homepageselector.paymentdetailspop)
      .should('be.visible')

    //Payment detals 
    cy.get(homepageselector.paymentdetailspop).should('contain', 'Payment details')

    //Paragraph 
    cy.get(homepageselector.paymentdetailspopparag)
      .should('contain', 'We will send you a payment link via email.')


    cy.get(homepageselector.paymentfrom)
      .should('exist')
      .and('be.visible');

    // Verify the Name label and input field
    cy.get(homepageselector.paymentnamelable)
      .should('exist')
      .and('contain', 'Name');

    cy.get(homepageselector.paymentnameinput)
      .should('exist')
      .and('have.attr', 'type', 'text')
      .and('have.attr', 'name', 'name')
      .and('be.visible');

    // Verify the Submit button
    cy.get(homepageselector.paymentsubmitbtn)
      .should('exist')
      .and('have.attr', 'type', 'submit')
      .and('contain', 'Submit')
      .and('be.visible');




  })
})

