class Login
{
    constructor()
    {
        this.username="input[name=username]";
        this.password="input[name=password]";
        this.signonbutton="input[name=signon]";

    }
    get UserName()
    {
        return cy.get(this.username);
    }
    get Password()
    {
        return cy.get(this.password);
    }

   get SignonButton()
    {
        return cy.get(this.signonbutton);
    }
}
const login = new Login()
export default login