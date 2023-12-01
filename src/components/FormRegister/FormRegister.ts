import { User } from "firebase/auth";
import { appState,dispatch } from "../../store";
import { AddUser,Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import firebase,{auth}from "../../utils/firebase";
import styles from "./FormRegister.css"

const credentials = {
    uid: "",
    Name: "",
    userName: "",
    email: "",
    password: "",
    Confirmpassword:"",
    img: "",
}

export default class MyFormRegister extends HTMLElement{
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
        container.className = "form"
        this.shadowRoot?.appendChild(container)

        const name = this.ownerDocument.createElement("input")
        name.placeholder = "Name"
        name.type = "text"
        name.addEventListener("change", (e:any)=>{
            credentials.Name = e.target.value
        })


        const userName = this.ownerDocument.createElement("input")
        userName.placeholder = "Username"
        userName.type = "text"
        userName.addEventListener("change", (e:any)=>{
            credentials.userName = e.target.value
        })

        const email = this.ownerDocument.createElement("input")
        email.placeholder = "Email"
        email.type = "email"
        email.addEventListener("change", (e:any)=>{
            credentials.email = e.target.value
        })

        const password = this.ownerDocument.createElement("input")
        password.placeholder = "Password"
        password.type = "password"
        password.addEventListener("change", (e:any)=>{
            credentials.password = e.target.value
        })

        const confirmpassword= this.ownerDocument.createElement("input")
        confirmpassword.placeholder = "Confirm password"
        confirmpassword.type = "password"
        confirmpassword.addEventListener("change", (e:any)=>{
            credentials.Confirmpassword = e.target.value
        })


        const sendbtn = this.ownerDocument.createElement("button")
        sendbtn.innerText = "Register"
        sendbtn.addEventListener("click", async ()=>{
          const user = await firebase.registerUser(credentials)
          console.log(user)
          credentials.uid = user.user.uid
          dispatch(await AddUser(credentials))
          if(user){
            dispatch(Navigate(Screens.DASHBOARD))
            sessionStorage.clear()
          }  
        })

        
       
        this.shadowRoot?.appendChild(name)
        this.shadowRoot?.appendChild(userName)
        this.shadowRoot?.appendChild(email)
        this.shadowRoot?.appendChild(password)
        this.shadowRoot?.appendChild(confirmpassword)
        this.shadowRoot?.appendChild(sendbtn)

        }
    }

}

customElements.define('form-register', MyFormRegister)