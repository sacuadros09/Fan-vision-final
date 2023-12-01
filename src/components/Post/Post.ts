import { appState, dispatch } from "../../store";
import { AddPost } from "../../store/actions";
import { Post } from "../../types/post";
import styles from "./Post.css"

const post: Post = {
 id:appState.userData.uid,
    profile:"",
    named:appState.userData.Name,
    subname:appState.userData.userName,
    description:"",
    images:appState.userData.img,
    likes: "",
    number: 0,
    createdAt:"",
};

 class UploadePost extends HTMLElement{

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

        const container = this.ownerDocument.createElement("section")
        container.className = "topmid"

        const imgprofile = this.ownerDocument.createElement("img")
        imgprofile.src = appState.userData.img

        const descriptionPost = this.ownerDocument.createElement('input');
        descriptionPost.className = "descriptionpost"
        descriptionPost.placeholder = "Write what you want to post here..."
        descriptionPost.type = "text"
        descriptionPost.addEventListener("change",(e:any)=>{
            post.description = e.target.value
        })

        const imagePost = this.ownerDocument.createElement('input');
       imagePost.placeholder = "Put the image URL here"
        imagePost.type = "text"
        imagePost.addEventListener("change",(e:any)=>{
            post.images = e.target.value
        })

        const sendbtn = this.ownerDocument.createElement("button")
        sendbtn.textContent ="+"
        sendbtn.addEventListener("click",async()=>{
            dispatch(await AddPost(post))
        })

        container.appendChild(imgprofile)
        container.appendChild(descriptionPost)
        container.appendChild(imagePost)
        container.appendChild(sendbtn)
        this.shadowRoot.appendChild(container)
        }
    }

}   

customElements.define('my-post', UploadePost)
export default UploadePost