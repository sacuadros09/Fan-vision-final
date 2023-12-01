import { appState,dispatch } from "../../store";
import { AddUser,Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import firebase,{auth}from "../../utils/firebase";
import styles from "./Icons.css"


export default class MyIcons extends HTMLElement{
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
        this.shadowRoot?.appendChild(container)

        const logo = this.ownerDocument.createElement("img")
        logo.src = "/src/img/logo.png"
        logo.className = "logo"

        const left = this.ownerDocument.createElement("div")
            left.className = "left"

         
        
        const LogoHome = this.ownerDocument.createElement("img")
        LogoHome.src = "/src/img//home.png"
        LogoHome.className = "home"

        const home = this.ownerDocument.createElement("h2")
        home.className = "home_txt"
        home.innerText = "Home"

        
        const LogoNotification = this.ownerDocument.createElement("img")
        LogoNotification.src = "/src/img/notifications.png"
        LogoNotification.className = "notifi"

        const notification = this.ownerDocument.createElement("h2")
        notification.className = "notification_txt"
        notification.innerText = "Notification"

        const LogoExplore = this.ownerDocument.createElement("img")
        LogoExplore.src = "/src/img/search.png"
        LogoExplore.className = "explore"

        const explore = this.ownerDocument.createElement("h2")
        explore.className = "explore_txt"
        explore.innerText = "Explore"

        const LogoProfile = this.ownerDocument.createElement("img")
        LogoProfile.src = "/src/img/person.png"
        LogoProfile.className = "profile"

        const profile = this.ownerDocument.createElement("h2")
        profile.className = "profile_txt"
        profile.innerText = "Profile"
        
        const buttonuploade=document.createElement("button")
        buttonuploade.innerText="Menu"
        buttonuploade.className = "btnmenu"
        buttonuploade.addEventListener("click",()=>{
            dispatch(Navigate(Screens.MENU))
        })


            left.appendChild(logo)
            left.appendChild(LogoHome)
            left.appendChild(home)
            left.appendChild(LogoNotification)
            left.appendChild(notification)
            left.appendChild(LogoExplore)
            left.appendChild(explore)
            left.appendChild(LogoProfile)
            left.appendChild(profile)
            left.appendChild(buttonuploade);
            container.appendChild(left)
            
            this.shadowRoot?.appendChild(container)
        }
    }

}

customElements.define('my-icons', MyIcons)