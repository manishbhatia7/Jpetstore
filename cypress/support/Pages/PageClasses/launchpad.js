class Launch
{
    constructor()
    {
        this.anchor="a";
        this.content="div#Content"

    }
    get entertheStore()
    {
        return cy.get(this.anchor);
    }
    get divContent()
    {
        return cy.get(this.content)
    }
}
const launch=new Launch()
export default launch