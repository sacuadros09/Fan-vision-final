import "../../components/index"
import { dispatch } from "../../store/index";
import { Navigate } from "../../store/actions";
import { Screens } from "../../types/store";
import styles from "./register.css"

 

export default class DashboardRegister extends HTMLElement {
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
            
            const campsForm = this.ownerDocument.createElement("form-register")
            campsForm.className = "inputform"

            const formbot = this.ownerDocument.createElement('section');
            formbot.className = "formbot"

            const forminput = this.ownerDocument.createElement('section');
            forminput.className = "forminput"

            const botbutton = this.ownerDocument.createElement('section');
            botbutton.className = "botbutton"

            formbot.appendChild(forminput)
            formbot.appendChild(botbutton)



            const ImageRegister=document.createElement("img")
            ImageRegister.className = "banner"
        ImageRegister.src="/src/img/Messi.png"
        leftimage.appendChild(ImageRegister)


            const LogoRegister=document.createElement("img")
            LogoRegister.className = "logo"
        LogoRegister.src="/src/img/logo.png"
        form.appendChild(LogoRegister)

        const SignIn = this.ownerDocument.createElement("h2")
            SignIn.className = "SignIn"
            SignIn.innerText = "Sign In"
            form.appendChild(SignIn)

            const SignUp = this.ownerDocument.createElement("h2")
            SignUp.className = "SignUp"
            SignUp.innerText = "Sign Up"
            form.appendChild(SignUp)


           const account = this.ownerDocument.createElement ("button")
            account.className = "haveacc"
            account.innerText = 'Already have an account?';
           account.addEventListener("click", ()=>{
              dispatch(Navigate(Screens.LOGIN))
                
            })
            
            form.appendChild(campsForm)
            botbutton.appendChild(account)
            container.appendChild(leftimage)
            container.appendChild(formbot)
            container.appendChild(form)
            container.appendChild(forminput)
            container.appendChild(botbutton)
            this.shadowRoot?.appendChild(container);


        }
    }
}

customElements.define('my-dashboardregister', DashboardRegister)