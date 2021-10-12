class signon
{
    constructor()
    {
        this.sign="input[name=signon]";
    }
    get signOn()
    {
        return cy.get(this.sign);
    }
}
const signin=new signon()
export default signin