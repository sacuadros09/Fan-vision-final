import { appState,dispatch } from "../../store";
import { AddUser,Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import firebase,{auth}from "../../utils/firebase";
import styles from "./Friends.css"


export default class MyFriends extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render()
    }

    render(){
        if(this.shadowRoot){ 
        this.shadowRoot.innerHTML = '';

        const css = this.ownerDocument.createElement('style')
        css.innerHTML = styles
        this.shadowRoot?.appendChild(css)

        const container = this.ownerDocument.createElement('section')
        container.className = "right"
        this.shadowRoot?.appendChild(container)

        const topfriends = this.ownerDocument.createElement("div")
            topfriends.className = "topfriends"

        const down = this.ownerDocument.createElement("div")
            down.className = "down"

         const downname = this.ownerDocument.createElement("div")
            downname.className = "downname"

            const downsubname = this.ownerDocument.createElement("div")
            downsubname.className = "downsubname"

            const Friends = this.ownerDocument.createElement("h1")
            Friends.className = "friends"
            Friends.innerText = "Friends"
        
        const LogoPepito = this.ownerDocument.createElement("img")
        LogoPepito.src = "/src/img/Rico.png"
        LogoPepito.className = "pepito_logo"

        const NamePepito = this.ownerDocument.createElement("h2")
        NamePepito.className = "pepito"
        NamePepito.innerText = "@Ricoperico"

        const SubPepito = this.ownerDocument.createElement("h3")
        SubPepito.className = "subnamepepito"
        SubPepito.innerText = "MessiLover"

        const LogoSacuma = this.ownerDocument.createElement("img")
        LogoSacuma.src = "/src/img/Cuadrostwo.png"
        LogoSacuma.className = "sacuma_logo"

        const NameSacuma = this.ownerDocument.createElement("h2")
        NameSacuma.className = "sacuma"
        NameSacuma.innerText = "@Sacuma09"

        const SubSacuma = this.ownerDocument.createElement("h3")
        SubSacuma.className = "subnamesacuma"
        SubSacuma.innerText = "Metegoles99"

        const LogoJayco = this.ownerDocument.createElement("img")
        LogoJayco.src = "/src/img/Jaycortez.png"
        LogoJayco.className = "jayco_logo"

        const NameJayco = this.ownerDocument.createElement("h2")
        NameJayco.className = "jayco"
        NameJayco.innerText = "@Jaycortes12"

        const SubJayco = this.ownerDocument.createElement("h3")
        SubJayco.className = "subnamejayco"
        SubJayco.innerText = "Jaycortes"


            topfriends.appendChild(Friends)
            down.appendChild(LogoPepito)
            downname.appendChild(NamePepito)
            downsubname.appendChild(SubPepito)
            down.appendChild(LogoSacuma)
            downname.appendChild(NameSacuma)
            downsubname.appendChild(SubSacuma)
            down.appendChild(LogoJayco)
            downname.appendChild(NameJayco)
            downsubname.appendChild(SubJayco)
            container.appendChild(topfriends)
            container.appendChild(down)
            container.appendChild(downname)
            container.appendChild(downsubname)
            this.shadowRoot?.appendChild(container)
        }
    }

}

customElements.define('my-friends', MyFriends)