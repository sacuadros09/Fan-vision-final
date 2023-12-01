import "../../components/index"
import { dataIcons } from "../../dataIcons/dataIcons"
import CardIcons, {AttributeIcons} from "../../components/CardIcons/CardIcons"
import { attributeMenu } from "../../components/Menu/Menu"
import { AttributeProfile } from "../../components/Profile/Profile"
import { appState, dispatch } from "../../store/index";
import {Edit,LogOut,Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import styles from "./profile.css"

const credentials = { 
    userName: "",
    description: "",
    email: "",
    password: "",
    img: "",
}

export default class DashboardProfile extends HTMLElement{
    cardicons: CardIcons[] = [];
   

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
        const topbot = document.createElement("section")
        topbot.className = "topbot"


        const logouploade=document.createElement("img")
        logouploade.src="/src/img/logo.png"
        sectionicon.appendChild(logouploade); 
        

        this.cardicons.forEach((cardicons) => {
            sectionicon.appendChild(cardicons);
        })
        container.appendChild(sectionicon);


            const buttonuploade=document.createElement("button")
            buttonuploade.innerText="Home"
            buttonuploade.addEventListener("click", ()=>{
                dispatch(Navigate(Screens.DASHBOARD))
             })
 
            sectionicon.appendChild(buttonuploade);


            const Profilepicture=document.createElement("img")
            Profilepicture.className = "Imgphoto"
        Profilepicture.src="/src/img/AñadirAmigo.png"
       // Profilepicture.src= appState.userData.img
        topmid.appendChild(Profilepicture)

        const Añadir = this.ownerDocument.createElement("h2")
            Añadir.className = "addfriend"
            Añadir.innerText = "@Añadir perfil"
            topmid.appendChild(Añadir)

            const Biografy = this.ownerDocument.createElement("p")
            Biografy.className = "biografy"
            Biografy.innerText = "Hi, I'm Sebastián Gonzales, also known as @SebasG7  I'm a futbol player fan, and I don't have many friends, so I hope you can add me."
            topmid.appendChild(Biografy)

            const editProfile = this.ownerDocument.createElement("section");
            editProfile.className = "editProfile";
            container.appendChild(editProfile);

            const NewProfile = this.ownerDocument.createElement('my-profile')
            NewProfile.className = "Firstinput"
            NewProfile.setAttribute(AttributeProfile.text, "New Profile")
            NewProfile.setAttribute(AttributeProfile.type, "text")
           // NewProfile.placeholder = appState.userData.userName 
             NewProfile.addEventListener("change",(e:any)=>credentials.userName = e.target.value)
            topbot.appendChild(NewProfile)

            const Description = this.ownerDocument.createElement('my-profile')
            Description.className = "Secondinput"
            Description.setAttribute(AttributeProfile.text, "Change Description")
            Description.setAttribute(AttributeProfile.type, "text")
            //Description.placeholder = appState.userData.userName
            Description.addEventListener("change",(e:any)=>credentials.description = e.target.value)
            topbot.appendChild(Description)

            const ChangePassword = this.ownerDocument.createElement('my-profile')
            ChangePassword.className = "Thirdinput"
            ChangePassword.setAttribute(AttributeProfile.text, "Change Password")
            ChangePassword.setAttribute(AttributeProfile.type, "text")
            ChangePassword.addEventListener("change",(e:any)=>credentials.password = e.target.value)
            topbot.appendChild(ChangePassword);

            const ChangeEmail = this.ownerDocument.createElement('my-profile');
            ChangeEmail.className = "Fourinput"
            ChangeEmail.setAttribute(AttributeProfile.text, "Change Email");
            ChangeEmail.setAttribute(AttributeProfile.type, "password");
          //  ChangeEmail.placeholder = appState.userData.email
            ChangeEmail.addEventListener("change", (e:any)=>credentials.email = e.target.value);
           // console.log(credentials)
            topbot.appendChild(ChangeEmail);





            const button = this.ownerDocument.createElement('button');
            button.innerText = "Save"
            button.className = "buttonsave"
           // button.addEventListener("click", async ()=>{
            //   dispatch(await Edit(credentials))
           // })
            topbot.appendChild(button)

            
            const logoutbutton = this.ownerDocument.createElement('button');
            logoutbutton.innerText = "Log Out"
            logoutbutton.className = "buttonlogout"
            logoutbutton.addEventListener("click", ()=>{
               dispatch(LogOut())
            })

            topbot.appendChild(button)

          

            
           topbot.appendChild(button)
           topbot.appendChild(logoutbutton)
            container.appendChild(topmid)
            container.appendChild(topbot)
            this.shadowRoot?.appendChild(container)
        }
    }
}

customElements.define("my-dashboardprofile",DashboardProfile);