import styles from "./menu.css"


export enum attributeMenu {
    "text" = "text",
}
 class Menu extends HTMLElement{
    text?: string;

    static get observedAttributes() {
        const attr: Record<attributeMenu,null> ={
    
            text: null,
           
    
        };
        return Object.keys(attr);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"})
    }
    
    attributeChangedCallback(
        propName: attributeMenu,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                
                default:
                this[propName] = newValue;
                break;
            }
        }
    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML =  "";

           const css = this.ownerDocument.createElement("style")
            css.innerHTML=styles
            this.shadowRoot?.appendChild(css)

            const button= this.ownerDocument.createElement("button");

            
            this.shadowRoot?.appendChild(button)
            button.innerText = `${this.text}`

            
        }
    }
}


customElements.define("my-menu",Menu);
export default Menu;