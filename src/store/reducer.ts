import { Actions, AppState, UserActions,NavigationActions,PostActions } from "../types/store";

export const reducer = (Action: any, State: AppState): AppState => {
    const { action, payload } = Action; 

    switch (action) {
        case UserActions.ADD_USER:
            State.userData = payload
            return State

        case UserActions.GET_USER:
        State.userData = payload
        return State

        case UserActions.LOGOUT:
            return {
             
                ...State , userCredentials:""
            }

            case UserActions.EDIT:
                State.userData = payload
                return State
    
            case UserActions.SET_USER:
                State.userCredentials = payload
                return State
    
    case NavigationActions.NAVIGATE:
        State.screen = payload
            return State

            case PostActions.ADD_POST:
                State.posts = [...State.posts, payload]
                return State
    
            case PostActions.GET_POSTS:
                State.posts = payload
                return State

            
        default:
            return State;
    }
}