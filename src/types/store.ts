import {User} from "./users"
//import { Userlogin } from "./users";
import { Post } from "./post";
export type Observer = ({ render: () => void } & HTMLElement);

export type AppState = {
    userCredentials: string,
  // userlogin:Userlogin
    screen: Screens,
    posts: Post[],
    userData: User,
}

export enum Screens{
    REGISTER = "REGISTER",
    DASHBOARD = "DASHBOARD",
    PROFILE = "PROFILE",
    LANDING = "LANDING",
    MENU = "MENU",
    LOGIN = "LOGIN",
    POST = "POST"
}

export enum NavigationActions{
    "NAVIGATE" = "NAVIGATE",
}

export interface NavigationAction{
    action: NavigationActions.NAVIGATE;
    payload: Screens;
}

export enum UserActions {
    "ADD_USER"="ADD_USER",
    "GET_USER"="GET_USER",
    "LOGOUT" = "LOGOUT",
    "EDIT" = "EDIT",
    "SET_USER"="SET_USER",
    
}

export interface AddUserAction {  
    action: UserActions.ADD_USER,
    payload: User
}

export interface GetUserAction{
    action: UserActions.GET_USER,
    payload: User
}

export interface LogOutAction {
    action: UserActions.LOGOUT,
    payload: void
}



export interface EditAction {
    action: UserActions.EDIT,
    payload: User
}

export interface SetUserAction {
    action: UserActions.SET_USER,
    payload: string
}

export enum PostActions {
    "ADD_POST" = "ADD_POST",
    "GET_POSTS" = "GET_POSTS",
}

export interface AddPostAction {
    action: PostActions.ADD_POST,
    payload: Post,
}

export interface GetPostsAction {
    action: PostActions.GET_POSTS,
    payload: Post[],
}


export type Actions = AddUserAction |GetUserAction| LogOutAction |EditAction|SetUserAction| NavigationActions| AddPostAction | GetPostsAction;