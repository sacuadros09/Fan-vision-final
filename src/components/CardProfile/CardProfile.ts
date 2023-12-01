export enum AttributeProfile {
    "profilephoto" = "profilephoto",
    "subnames" = "subnames" ,
    "names" = "names",
}

class CardProfile extends HTMLElement {
    
    profilephoto?: string;
    subnames?: string;
    names?: string;
    
    static get observedAttributes(){
        const attrs: Record<AttributeProfile, null> = {
            profilephoto: null,
            subnames: null,
            names: null,
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(
        propName: AttributeProfile,
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
                <link rel="stylesheet" href="../src/components/CardProfile/CardProfile.css">
                <section class = "All">
                <img src=${this.profilephoto}></img>
                <section class = "text">
                <h1>${this.subnames}</h1>
                <h3>${this.names}</h3>
                </section>
                </section>
                `
            }
        }
    }
    
customElements.define("my-cardprofile",CardProfile);
export default CardProfile  ;