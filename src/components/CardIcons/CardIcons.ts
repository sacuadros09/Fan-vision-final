export enum AttributeIcons{
    "logo" = "logo",
    "img" = "img" ,
    "name" = "name",

}

class CardIcons extends HTMLElement {
    
    logo?: string;
    img?: string;
    name?: string;
    
    static get observedAttributes(){
        const attrs: Record<AttributeIcons, null> = {
            logo: null,
            img: null,
            name: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(
        propName: AttributeIcons,
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
                <link rel="stylesheet" href="../src/components/CardIcons/CardIcons.css">
                <section class = "leftside">
                <img class = "secondimg" src=${this.img}></img>
                <h1 class = "notifi">${this.name}</h1>  
                </section>
                `
            }
        }
    }
    
customElements.define("my-cardicons",CardIcons);
export default CardIcons;