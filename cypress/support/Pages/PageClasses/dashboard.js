class Dashboard
{
    constructor()
    {
        this.anchor="a";
        this.category_link="#SidebarContent > a:nth-child(1) > img";
    }
    get Signout()
    {
        return cy.get(this.anchor).contains("Sign Out");
    }

    get Myaccount()
    {
        return cy.get(this.anchor).contains("My Account");

    }
    get Category()
    {
        return cy.get(this.category_link);
    }
    get signIn()
    {
        return cy.get(this.anchor).contains("Sign In");
    }

}
const dash_board=new Dashboard()
export default dash_board