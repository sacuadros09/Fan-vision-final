import { addObserver,appState,dispatch} from "../../store";
import { GetPosts } from "../../store/actions";
import { Post } from "../../types/post";
import { User } from "firebase/auth";
import styles from "./CardPublication.css"


class CardPublication extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        addObserver(this)
    }   

    async connectedCallback() {
        if(appState.posts.length ===0){
        dispatch(await GetPosts())
        this.render();
    }else{
        this.render()
    }
    }

        
        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML = ``
                const container = this.ownerDocument.createElement("section")
                container.className = "mid"

                for(let i=0; i<appState.posts.length; i++){
                    const all = this.ownerDocument.createElement("section")
                    all.className ="all"

                    const profile = this.ownerDocument.createElement("section")
                    profile.className = "profile"
                    all.appendChild(profile)


                    const Name = this.ownerDocument.createElement("h3")
                    Name.className = "Name"
                    Name.textContent = appState.posts[i].named
                    profile.appendChild(Name)
                   

                    const UserName = this.ownerDocument.createElement("h3")
                    UserName.className = "UserName"
                    UserName.textContent =  appState.posts[i].subname
                    profile.appendChild(UserName)
                  

                    const description = this.ownerDocument.createElement("p")
                    description.textContent = appState.posts[i].description
                    all.appendChild(description)
                    
                    const img = this.ownerDocument.createElement("img")
                    img.src= appState.posts[i].images
                    all.appendChild(img)
                  

                    const likeAppart = this.ownerDocument.createElement("section")
                    likeAppart.className = "likeAppart"
                    all.appendChild(likeAppart)

                    const like = this.ownerDocument.createElement("button")    
                    like.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-thumb-up" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 11v8a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1v-7a1 1 0 0 1 1 -1h3a4 4 0 0 0 4 -4v-1a2 2 0 0 1 4 0v5h3a2 2 0 0 1 2 2l-1 5a2 3 0 0 1 -2 2h-7a3 3 0 0 1 -3 -3"></path>
                </svg>`;
                likeAppart.appendChild(like);


                const save = this.ownerDocument.createElement("button");
                save.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-bookmark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2"></path>
                </svg>`;

                
                likeAppart.appendChild(save);

                save.addEventListener("click",async()=>{
                    dispatch((appState.posts[i]))
                })
            

                container.appendChild(all)

            }
          

            const css = this.ownerDocument.createElement('style')
            css.innerHTML = styles
            this.shadowRoot?.appendChild(css)   
          
            this.shadowRoot?.appendChild(container)



            }
        }
}
    
customElements.define("my-cardpublication",CardPublication);
export default CardPublication;