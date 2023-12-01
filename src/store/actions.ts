import { onAuthStateChanged } from "firebase/auth"
import { appState, dispatch } from "."
import { Post } from "../types/post"
import {  Actions, UserActions, PostActions, NavigationActions, AddUserAction, LogOutAction,NavigationAction, Screens,EditAction, GetPostsAction, AddPostAction,SetUserAction,GetUserAction} from "../types/store"
import { User} from "../types/users"
import firebase from "../utils/firebase"

export const Navigate = (screen:Screens): NavigationAction =>{
    return{
        action: NavigationActions.NAVIGATE,
        payload:screen,
    }
}

export const AddUser = async (user:User ): Promise<AddUserAction> =>{
    await firebase.AddUserDB(user)

   

    return{
        action:UserActions.ADD_USER,
        payload: user,
    }
}

export  const GetUser = async(): Promise<GetUserAction> =>{

    onAuthStateChanged
    const user = await firebase.GetUserDB()

    return{
        action: UserActions.GET_USER,
        payload: user,
    }
}
export const LogOut =  ():LogOutAction =>{

    if(appState.userCredentials !==null || ''){

        dispatch(SetUserCredentials(''))    
        appState.posts =[]
        appState.userData ={
            uid: "",
            Name: "",
            userName: "",
            email: "",
            password: "",
            Confirmpassword: "",
            img: "",
        }
        sessionStorage.clear()
        dispatch(Navigate(Screens.LOGIN))
    }
    


    return{
        action: UserActions.LOGOUT,
        payload: undefined,
    }
}

export const Edit = async (user:User): Promise<EditAction> =>{
    await firebase.EditUserDB(user)
    return{
        action: UserActions.EDIT,
        payload: user,
    }
}

export const SetUserCredentials =  (user:string): SetUserAction=>{

    return{
        action: UserActions.SET_USER,
        payload: user,
    }
}



export const AddPost = async (post:Post): Promise<AddPostAction> =>{

    await firebase.AddPostDB(post)

    return{
        action:PostActions.ADD_POST,
        payload: post,
    }
}

export const GetPosts = async (): Promise<GetPostsAction> =>{

    const posts = await firebase.GetPostsDB()

    return{
        action:PostActions.GET_POSTS,
        payload: posts,
    }
}
