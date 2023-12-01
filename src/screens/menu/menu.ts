import "../../components/index"
import { dataIcons } from "../../dataIcons/dataIcons"
import { dataFriends } from "../../dataFriends/dataFriends"
import { dataProfile} from "../../dataProfile/dataProfile"
import { dataUploade } from "../../dataUploade/dataUploade"
import CardMenu, {AttributeUploade} from "../../components/CardMenu/CardMenu"
import CardIcons, {AttributeIcons} from "../../components/CardIcons/CardIcons"
import CardFriends,{AttributeFriends} from "../../components/CardFriends/CardFriends"
import CardProfile,{AttributeProfile} from "../../components/CardProfile/CardProfile"
import { attributeMenu } from "../../components/Menu/Menu"
import { dispatch } from "../../store/index";
import {Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import styles from "./menu.css"




export default class DashboardMenu extends HTMLElement{
    cardicons: CardIcons[] = [];
    cardfriends: CardFriends[] = [];
    cardprofiles: CardProfile[] =[];
    cardmenus: CardMenu[]=[];
   
   

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        dataIcons.forEach((s) => {
            const CardIcon = this.ownerDocument.createElement("my-cardicons") as CardIcons;
            CardIcon.setAttribute(AttributeIcons.logo,s.logo);
            CardIcon.setAttribute(AttributeIcons.img,s.img);
            CardIcon.setAttribute(AttributeIcons.name,s.name);
            this.cardicons.push(CardIcon);
            
        });

        dataUploade.forEach((c) => {
            const CardUpload = this.ownerDocument.createElement("my-cardmenu") as CardMenu;
            CardUpload.setAttribute(AttributeUploade.profile,c.profile);
            CardUpload.setAttribute(AttributeUploade.named,c.named);
            CardUpload.setAttribute(AttributeUploade.subname,c.subname);
            CardUpload.setAttribute(AttributeUploade.description,c.description);
            CardUpload.setAttribute(AttributeUploade.images,c.images);
            CardUpload.setAttribute(AttributeUploade.likes,c.likes);
            CardUpload.setAttribute(AttributeUploade.number,c.number);
            this.cardmenus.push(CardUpload);
            
        });

        dataFriends.forEach((p) => {
            const CardFriend = this.ownerDocument.createElement("my-cardfriends") as CardFriends;
            CardFriend.setAttribute(AttributeFriends .profilefoto,p.profilefoto);
            CardFriend.setAttribute(AttributeFriends.named,p.named);
            CardFriend.setAttribute(AttributeFriends.subname,p.subname);
            this.cardfriends.push(CardFriend);
            
        });

        dataProfile.forEach((m) => {
            const CardProfiles = this.ownerDocument.createElement("my-cardprofile") as CardProfile;
            CardProfiles.setAttribute(AttributeProfile.profilephoto,m.profilephoto);
            CardProfiles.setAttribute(AttributeProfile.subnames,m.subnames);
            CardProfiles.setAttribute(AttributeProfile.names,m.names);
            this.cardprofiles.push(CardProfiles);
            
        });
    }
    

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="/src/index.css">
            
            
        `;
        const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css);
        const container=document.createElement("section")
        container.className = "all"

        

        const sectionicon=document.createElement("nav")
        sectionicon.className = "leftside"

        const topmid = document.createElement("section")
        topmid.className = "topmid"


        const logouploade=document.createElement("img")
        logouploade.src="/src/img/logo.png"
        sectionicon.appendChild(logouploade); 
        

        this.cardicons.forEach((cardicons) => {
            sectionicon.appendChild(cardicons);
        })
        container.appendChild(sectionicon);


            const buttonuploade=document.createElement("button")
            buttonuploade.innerText="Home"
            sectionicon.appendChild(buttonuploade);
            buttonuploade.addEventListener("click", ()=>{
               dispatch(Navigate(Screens.DASHBOARD))
            })

            const sectionuploade=document.createElement("section")

            const Profilepicture=document.createElement("img")
            Profilepicture.className = "Profilepicture"
        Profilepicture.src="/src/img/gonzalez.png"
        sectionuploade.appendChild(Profilepicture)

        const Username = this.ownerDocument.createElement("h2")
            Username.className = "username"
            Username.innerText = "@SebasG819"
            sectionuploade.appendChild(Username)

            const Nickname = this.ownerDocument.createElement("h2")
            Nickname.className = "Nickname"
            Nickname.innerText = "Ciclistafutbol"
            sectionuploade.appendChild(Nickname)

            const button = this.ownerDocument.createElement('my-menu');
            button.className = "buttonmenu"
            button.setAttribute(attributeMenu.text,"Edit profile")
            sectionuploade.appendChild(button)
            button.addEventListener("click", ()=>{
               dispatch(Navigate(Screens.PROFILE))
            })

            const info = this.ownerDocument.createElement("h2")
            info.className = "info"
            info.innerText = "Hi, I'm Sebastián Gonzalez, also known as @SebasG819  I'm a futbol player fan, and bad women at dm."
            sectionuploade.appendChild(info)


            sectionuploade.className = "midside"
            this.cardmenus.forEach((carduploade) => {
                sectionuploade.appendChild(carduploade);
            })
            container.appendChild(sectionuploade);


            

            const sectionprofile=document.createElement("section")
            this.cardprofiles.forEach((cardprofile) => {
                sectionprofile.appendChild(cardprofile);
            })
            container.appendChild(sectionprofile);
            this.shadowRoot?.appendChild(container)
            const closefriends=document.createElement("h2")
            closefriends.innerText = "Friends"
            sectionprofile.appendChild(closefriends);
           


            const sectionfriends=document.createElement("section")  
            sectionfriends.className = "sectionfriends"
            this.cardfriends.forEach((cardfriends) => {
                sectionfriends.appendChild(cardfriends);
            })


            const containeright = document.createElement("section")
            containeright.className = "containerRight"
            containeright.appendChild(sectionprofile)
           // container.appendChild(miduploade)
            container.appendChild(sectionfriends);
            containeright.appendChild(sectionfriends)
            container.appendChild(containeright)
            container.appendChild(topmid)
            this.shadowRoot?.appendChild(container)
        }
    }
}

customElements.define("my-dashboardmenu",DashboardMenu);    