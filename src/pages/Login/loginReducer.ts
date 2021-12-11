import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../redux/store";
import {authAPI} from "./authAPI";

export enum AuthEvents {
    SET_USER_DATA = 'SET_USER_DATA',
}

export type AuthStateType = {
    user: IUser | null
    isLoggedIn: boolean
}


export const initialState: AuthStateType = {
    user: null,
    isLoggedIn: false,

}

export type  IUser = {
    _id: string
    avatar: string
    email: string
    name: string
    token:string
    tokenDeathTime:number
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
}

export type InferActionsType<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
export type AuthActionsType = InferActionsType<typeof authActions>

export const loginReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case AuthEvents.SET_USER_DATA:
            return {...state, user: action.payload, isLoggedIn: true}
        default :
            return state
    }
}

export const authActions = {
setUserData: (payload: IUser) => {
    return {
        type: AuthEvents.SET_USER_DATA,
        payload
    } as const
},}


export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, {}, any> => async (dispatch) => {
    try {
        const data = await authAPI.login(email, password, rememberMe);
        dispatch(authActions.setUserData(data))
    } catch (e) {
        console.log(e)
    }
}