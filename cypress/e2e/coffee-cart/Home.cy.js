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
  // Step 1: Add 'Mocha' to the cart
  it('Step 1: Add "Mocha" to the cart by clicking on it', () => {
    //**** For Mocha click , verify text start ****
    // Verify that the product title contains "Mocha"
    cy.contains(homepageselector.productfourtitle).should('contain', 'Mocha ')
    // Verify that the product price displays "$8.00"
    cy.contains(homepageselector.productfourvalue).should('contain', '$8.00')
    // Ensure that the product box is visible before clicking
    cy.get(homepageselector.productfourbox).should('be.visible')
    // Click on the product box to add 'Mocha' to the cart
    cy.get(homepageselector.productfourbox).click()
    // Verify that the cart now contains 1 item
    cy.get(homepageselector.cart).should('contain', 'cart (1)')
    // Verify that the total price is updated to $8.00
    cy.get(homepageselector.total).should('contain', 'Total: $8.00')

    //**** For Mocha click , verify text end ****
  })

  // Step 2: Add 'Americano' to the cart
  it('Step 2: Add "Americano" to the cart by clicking on it', () => {
    //**** For Americano  click , verify text start ****
    // Click on the productfourbox to simulate adding a previous item
    cy.get(homepageselector.productfourbox).click()
    // Verify that the product title contains "Americano"
    cy.contains(homepageselector.productsixtitle).should('contain', 'Americano ')
    // Verify that the product price displays "$7.00"
    cy.contains(homepageselector.productsixvalue).should('contain', '$7.00')
    // Ensure that the Americano product box is visible before clicking
    cy.get(homepageselector.productsixbox).should('be.visible')
    // Click on the Americano product box to add 'Americano' to the cart
    cy.get(homepageselector.productsixbox).click()
    // Verify that the cart now contains 2 items
    cy.get(homepageselector.cart).should('contain', 'cart (2)')
    // Verify that the total price is updated to $15.00
    cy.get(homepageselector.total).should('contain', 'Total: $15.00')
    //**** For Americano  click , verify text end ****
  })
  // Step 3: Hover over the Total and add 1 more 'Mocha'
  it('Step 3: Hover over the Total and add 1 more "Mocha"', () => {
    // Click on the Mocha product box to add it to the cart
    cy.get(homepageselector.productfourbox).click()
    // Click on the Americano product box to add it to the cart
    cy.get(homepageselector.productsixbox).click()

    // **** Again click on Mocha to add one more start****
    // Verify that the product title contains "Mocha"
    cy.contains(homepageselector.productfourtitle).should('contain', 'Mocha ')
    // Verify that the product price displays "$8.00"
    cy.contains(homepageselector.productfourvalue).should('contain', '$8.00')
    // Ensure that the Mocha product box is visible before clicking
    cy.get(homepageselector.productfourbox).should('be.visible')
    // Click on the Mocha product box again to add one more 'Mocha'
    cy.get(homepageselector.productfourbox).click()
    // Verify that the cart now contains 3 items
    cy.get(homepageselector.cart).should('contain', 'cart (3)')
    // Verify that the total price is updated to $23.00
    cy.get(homepageselector.total).should('contain', 'Total: $23.00')
    // Hover over the Total to trigger the cart preview
    cy.get(homepageselector.total).realHover()
    // Verify the cart preview contains the correct items and counts
    cy.get(homepageselector.Verifyproductbyhover)
      .and('contain.text', 'Mocha') // Verify 'Mocha' is displayed
      .and('contain.text', ' x 2') // Verify there are 2 'Mocha' items
      .and('contain.text', 'Americano') // Verify 'Americano' is displayed
      .and('contain.text', ' x 1'); // Verify there is 1 'Americano'

    // **** Again click on Mocha to add one more end****
  })
  // Step 4: Add 'Espresso' to the cart by clicking 3 times
  it('Step 4: Add "Espresso" to the cart by clicking 3 times', () => {
    // **** Initial setup: Add 2 Mocha and 1 Americano to the cart ****
    cy.get(homepageselector.productfourbox).click().click()
    cy.get(homepageselector.productsixbox).click()
    //**** For Espresso  click , verify text end ****
    // Verify that the product title contains "Espresso"
    cy.contains(homepageselector.productfirsttitle).should('contain', 'Espresso ')
    // Verify that the product price displays "$10.00"
    cy.contains(homepageselector.productfistvalue).should('contain', '$10.00')
    // Ensure that the Espresso product box is visible before clicking
    cy.get(homepageselector.productfirstbox).should('be.visible')
    // Click on the Espresso product box 2 times dynamically using a loop
    cy.get(homepageselector.productfirstbox).then(($el) => {
      for (let i = 0; i < 2; i++) {
        cy.wrap($el).click();
      }
    });
    // Verify that the cart now contains 5 items
    cy.get(homepageselector.cart).should('contain', 'cart (5)')
    // Verify that the total price is updated to $43.00
    cy.get(homepageselector.total).should('contain', 'Total: $43.00')
    // Click on the Espresso product box 1 more time to make a total of 3 clicks
    cy.get(homepageselector.productfirstbox).click().wait(2000)
    // Verify that the cart now contains 6 items
    cy.get(homepageselector.cart).should('contain', 'cart (6)')
    // Verify that the total price is updated to $53.00
    cy.get(homepageselector.total).should('contain', 'Total: $53.00')

  })
  // Step 5:Verify lucky day offer and accept it
  it('Step 5: You should see "It\'s your lucky day!" and accept extra Mocha', () => {
    cy.get(homepageselector.productfourbox).click().click()
    cy.get(homepageselector.productsixbox).click()
    // Click on the Espresso product box 3 times to add 3 Espresso
    cy.get(homepageselector.productfirstbox).then(($el) => {
      for (let i = 0; i < 3; i++) {
        cy.wrap($el).click();
      }
    });
    // **** Verify "It's your lucky day!" offer ***
    cy.get(homepageselector.extracup).should('be.visible')
    // Verify the offer message contains the expected text
    cy.get(homepageselector.extracuptitle)
      .should('contain', "It's your lucky day! Get an extra cup of Mocha for $4.")
    // Click on the "Yes, of course!" button to accept the offer
    cy.get(homepageselector.yesbtn).should('contain', 'Yes, of course!').click()
    // Verify the cart now contains 7 items (after accepting the extra Mocha)
    cy.get(homepageselector.cart).should('contain', 'cart (7)')
    // Verify that the total price is updated to $57.00 after the extra Mocha is added
    cy.get(homepageselector.total).should('contain', 'Total: $57.00')

    cy.get(homepageselector.Verifyproductbyhover) // Verify discounted Mocha is listed
      .and('contain.text', '(Discounted) Mocha')
      .and('contain.text', ' x 1');

    cy.get(homepageselector.total).click()




  })
  // Step 6:Click on the Total and verify "Payment details"
  it('Step 6: Click on the Total and verify "Payment details" is displayed', () => {
    // **** Click on the Total to open the Payment details modal ****
    cy.get(homepageselector.total).click()
    // Verify that the payment details popup is visible
    cy.get(homepageselector.paymentdetailspop)
      .should('be.visible')

    // **** Verify the payment details header ****
    // Check that the header of the popup contains the text "Payment details"
    cy.get(homepageselector.paymentdetailspop).should('contain', 'Payment details')

    // **** Verify the introductory paragraph ****
    // Ensure the paragraph is present and contains the expected tex
    cy.get(homepageselector.paymentdetailspopparag)
      .should('contain', 'We will send you a payment link via email.')

    // **** Verify the Payment From section ****
    // Ensure that the Payment From section is visible and exists
    cy.get(homepageselector.paymentfrom)
      .should('exist')
      .and('be.visible');

    // **** Verify the "Name" label and input field ****
    // Check that the Name label is visible and contains the text 'Name'
    cy.get(homepageselector.paymentnamelable)
      .should('exist')
      .and('contain', 'Name');

    cy.get(homepageselector.paymentnameinput)
      .should('exist')
      .and('have.attr', 'type', 'text')
      .and('have.attr', 'name', 'name')
      .and('be.visible');

    // **** Verify the Submit button ****
    // Ensure that the Submit button is present and contains the expected text
    cy.get(homepageselector.paymentsubmitbtn)
      .should('exist')
      .and('have.attr', 'type', 'submit')
      .and('contain', 'Submit')
      .and('be.visible');


  })
})