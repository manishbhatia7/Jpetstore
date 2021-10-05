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
        cy.get("a").contains("Sign In").click()
        cy.fixture('user_details').then((user)=>
        {
        cy.log("Entering a username")
        cy.get('input[name=username]').clear().type(user.userid)
        cy.log("Entering the password")
        cy.get('input[name=password]').clear().type(user.new_password)
        cy.log("Submitting the credentials")
        cy.get('input[name=signon]').click()
        })
               
    });
    it('Purchase Fish', () => 
    {
        cy.get("#SidebarContent > a:nth-child(1) > img").click()
        cy.get("tr>th").contains("Product ID")
        cy.get("tr>th").contains("Name")
        cy.get("a").contains("FI-SW-01").click()
        cy.xpath("(//a[contains(text(),'Add to Cart')])[1]").click()
        cy.get("a").contains("Proceed to Checkout").click()
    });
    it('Confirm the Order', () => {
        cy.get('input[name=newOrder]').click()
        cy.get("a").contains("Confirm").click()
    });
    it('Sign out of the link', () => {
        cy.log("Signing out")
        cy.get("a").contains("Sign Out").click()
    });
});