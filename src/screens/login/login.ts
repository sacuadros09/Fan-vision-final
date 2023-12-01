import "../../components/index"
import { dispatch } from "../../store/index";
import { Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import styles from "./login.css"


export default class DashboardLogin extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot){
            this.shadowRoot.innerHTML = ``;

           const css = this.ownerDocument.createElement('style')
                css.innerHTML = styles
                this.shadowRoot?.appendChild(css);

            const container = this.ownerDocument.createElement("section")
            container.className = "container"

            const leftimage = this.ownerDocument.createElement("section")
            leftimage.className ="leftimage"

           
            const form = this.ownerDocument.createElement('section');
            form.className = "form"

            const inpuntform = this.ownerDocument.createElement("form-login")
            inpuntform.className = "inputsform"

            const account = this.ownerDocument.createElement('button');
            account.className = "account"
            account.innerText = 'Create an account';
            account.addEventListener("click", ()=>{
                dispatch(Navigate(Screens.REGISTER))
            })

            const ImageLogin=document.createElement("img")
            ImageLogin.className = "banner"
            ImageLogin.src="/src/img/Neymar.png"
            leftimage.appendChild(ImageLogin)


            const LogoRegister=document.createElement("img")
            LogoRegister.className = "logo"
            LogoRegister.src="/src/img/logo.png"
            form.appendChild(LogoRegister)

            const SignIn = this.ownerDocument.createElement("h2")
            SignIn.className = "SignIn"
            SignIn.innerText = "Sign in"
            form.appendChild(SignIn)

            const SignUp = this.ownerDocument.createElement("h2")
            SignUp.className = "SignUp"
            SignUp.innerText = "Sign up"
            form.appendChild(SignUp)
       
            form.appendChild(account)
            container.appendChild(leftimage)
            container.appendChild(form)
            container.appendChild(inpuntform)
          
            this.shadowRoot?.appendChild(container);


        }
    }
}

customElements.define('my-dashboardlogin', DashboardLogin)