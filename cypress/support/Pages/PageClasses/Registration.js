class registration
{
    constructor()
    {
        this.anchor="a";
        this.username="input[name=username]";
        this.password="input[name=password]";
        this.confirm_password="input[name=repeatedPassword]";
        this.first_name="//input[@name='account.firstName']";
        this.last_name="//input[@name='account.lastName']";
        this.email="//input[@name='account.email']";
        this.phone="//input[@name='account.phone']";
        this.address1="//input[@name='account.address1']";
        this.city="//input[@name='account.city']";
        this.state="//input[@name='account.state']";
        this.zip="//input[@name='account.zip']";
        this.country="//input[@name='account.country']";
        this.mylist_chkbox="//input[@name='account.listOption']"
        this.save_AccountInfo="input[name=newAccount]";
    }
    get registerNow()
    {
        return cy.get(this.anchor).contains("Register Now!")
    }
    get userName()
    {
        return cy.get(this.username);
    }
    get passWord()
    {
        return cy.get(this.password);
    }
    get confirmPassword()
    {
        return cy.get(this.confirm_password);
    }
    get firstName()
    {
        return cy.xpath(this.first_name);
    }
    get lastName()
    {
        return cy.xpath(this.last_name);
    }
    get Email()
    {
        return cy.xpath(this.email);
    }
    get Phone()
    {
        return cy.xpath(this.phone);
    }
    get Address1()
    {
        return cy.xpath(this.address1);
    }
    get City()
    {
        return cy.xpath(this.city);
    }
    get State()
    {
        return cy.xpath(this.state);
    }
    get Zip()
    {
        return cy.xpath(this.zip);
    }
    get Country()
    {
        return cy.xpath(this.country);
    }
    get MyListChkbox()
    {
        return cy.xpath(this.mylist_chkbox)
    }
    get SubmitDetails()
    {
        return cy.get(this.save_AccountInfo)
    }
}
const reg=new registration();
export default reg