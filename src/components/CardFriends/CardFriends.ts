export enum AttributeFriends{
    "profilefoto" = "profilefoto",
    "subname" = "subname" ,
    "named" = "named",
}

class CardFriends extends HTMLElement {
    
    profilefoto?: string;
    subname?: string;
    named?: string;
    
    static get observedAttributes(){
        const attrs: Record<AttributeFriends, null> = {
            profilefoto: null,
            subname: null,
            named: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(
        propName: AttributeFriends,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                default:
                this[propName] = newValue;
                break;
            }
        
            this.render();
        }
        
        constructor(){
            super();
            this.attachShadow({mode: "open"});
        }
        
        connectedCallback(){
            this.render();
        }
        
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="../src/components/CardFriends/CardFriends.css">
                <section class = "All">
                <img src=${this.profilefoto}></img>
                <section class = "text">
                <h1>${this.subname}</h1>
                <h3>${this.named}</h3>
                </section>
                </section>
                `
            }
        }
    }
    
customElements.define("my-cardfriends",CardFriends);
export default CardFriends ;