import login from '../support/Pages/PageClasses/loginPage'
import dash_board from '../support/Pages/PageClasses/dashboard'
describe('This test signs-in,purchase some items and sign out', () => {
    it('Launch the main application', () => {
        cy.visit('https://petstore.octoperf.com/')
        expect(cy.get("div#Content").contains("Welcome to JPetStore 6"))
        cy.get("a").contains("Enter the Store").click()
        //cy.get("a").contains("Sign In").click()
    });
    it.skip('Registers a new user', () => {
        cy.get("a").contains("Register Now!").click()
        cy.fixture('user_details').then((user)=>
        {
            cy.get('input[name=username]').type(user.userid)
            cy.get('input[name=password]').type(user.new_password)
            cy.get('input[name=repeatedPassword]').type(user.confirm_password)
            cy.xpath('//input[@name="account.firstName"]').type(user.FirstName)
            cy.xpath('//input[@name="account.lastName"]').type(user.LastName)
            cy.xpath('//input[@name="account.email"]').type(user.Email)
            cy.xpath('//input[@name="account.phone"]').type(user.Phone)
            cy.xpath('//input[@name="account.address1"]').type(user.Address1)
            cy.xpath('//input[@name="account.city"]').type(user.City),
            cy.xpath('//input[@name="account.state"]').type(user.State)
            cy.xpath('//input[@name="account.zip"]').type(user.Pincode)
            cy.xpath('//input[@name="account.country"]').type(user.Country)
            cy.xpath('//input[@name="account.listOption"]').should('not.be.checked')
            cy.xpath('//input[@name="account.listOption"]').check()
            cy.get('input[name=newAccount]').click()
        })
    });
    it('Sign it to the user', () => {
        cy.get("a").contains("Sign In").should('be.visible').click()
        cy.fixture('user_details').then((user)=>
        {
        cy.log("Asserting that username is present and entering a username")
        login.UserName.should('be.visible').clear().type(user.userid)
        cy.log("Asserting that password is present and entering a password")
        login.Password.should('be.visible').clear().type(user.new_password)
        cy.log("Submitting the credentials")
        login.SignonButton.should('be.visible').click()
        cy.get('#WelcomeContent').contains(user.FirstName)
        })
               
    });
    it('Launch Dashboard', () => {
        cy.log("Asserting Sign Out link")
        dash_board.Signout.should('be.visible')
        cy.log("Asserting My Account link")
        dash_board.Myaccount.should('be.visible')
        cy.log("Clicking on category")
        dash_board.Category.should('be.visible').click()
    });
    it('Find a Category', () => 
    {
        cy.fixture('fish_details').then((fish)=>
        {
            cy.log("Asserting the category")
            cy.get('div#Catalog>h2').contains(fish.Category)
            cy.log("Asserting Product ID")
            cy.get('#Catalog > table > tbody > tr:nth-child(4) > td:nth-child(2)').contains(fish.Name).should('be.visible')
            cy.get('#Catalog > table > tbody > tr:nth-child(4) > td:nth-child(1) > a').contains(fish.ProductID).should('be.visible').click()
        })
        
    });
    it('Purchase a Category', () => {
        cy.fixture('fish_details').then((fish)=>
        {
            cy.log("Asserting ItemID")
            cy.get("a").contains(fish.ItemID).should('be.visible')
            cy.log("Asserting Add to Cart")
            cy.xpath("(//a[contains(text(),'Add to Cart')])[1]").should('be.visible').click()

        })
    });
    it('Updating the Cart', () => {
        cy.fixture('fish_details').then((fish)=>
        {
            cy.get("a").contains(fish.ItemID).should('be.visible')
            cy.get('tr>td').contains(fish.ProductID).should('be.visible')
            cy.get('#Cart > form > table > tbody > tr:nth-child(2) > td:nth-child(5) > input[type=text]').clear().type('1')
        })
        cy.get('input[name=updateCartQuantities]').should('be.visible').click()
        cy.get('a').contains('Proceed to Checkout').should('be.visible').click()
       });

    it('Asserting the User details one last time', () => {
        cy.fixture('user_details').then((user)=>
        {
            cy.xpath('//input[@name="order.billToFirstName"]').should('have.value',user.FirstName)
            cy.xpath('//input[@name="order.billToLastName"]').should('have.value',user.LastName)
            cy.xpath('//input[@name="order.billAddress1"]').should('have.value',user.Address1)          

        })
        cy.log("Asserting Continue button")
        cy.get('input[name=newOrder]').should('be.visible').click()

    });
    it('Confirming the Order', () => {
        cy.log("Not doing any assertion here")
        cy.get('div#Catalog').contains("Please confirm the information below and then press continue...").should('be.visible')
        cy.get('table>tbody>tr>th').contains("Billing Address").should('be.visible')
        cy.get('a').contains("Confirm").should('be.visible').click()
    });
    it('Sign out of the link', () => {
        cy.log("Signing out")
        cy.log('Asserting Sign out link')
        cy.get("a").contains("Sign Out").click()
    });
});