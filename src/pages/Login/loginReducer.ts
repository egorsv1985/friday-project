import {ThunkAction} from "redux-thunk";
import {AppStateType} from "../../redux/store";
import {authAPI} from "./authAPI";

export enum AuthEvents {
    SET_USER_DATA = 'SET_USER_DATA',
    SET_LOADING = 'SET_LOADING',
    SET_ERROR = 'SET_ERROR',
}
//types


export type AuthStateType = {
    user: IUser | null
    isLoggedIn: boolean
    error: string | null
    loading: boolean
}

export const initialState: AuthStateType = {
    user: null,
    isLoggedIn: false,
    error: null,
    loading: false
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

// reducer
export const loginReducer = (state = initialState, action: AuthActionsType) => {
    switch (action.type) {
        case AuthEvents.SET_USER_DATA:
            return {...state, user: action.payload, isLoggedIn: true}
        case AuthEvents.SET_LOADING:
            return {...state, loading: action.payload}
        case AuthEvents.SET_ERROR:
            return {...state, error: action.error, loading: false}
        default :
            return state
    }
}

// actions creators
export const authActions = {
setUserData: (payload: IUser) => {
    return {
        type: AuthEvents.SET_USER_DATA,
        payload
    } as const
},
    setLoading: (payload: boolean) => {
        return {
            type: AuthEvents.SET_LOADING,
            payload
        } as const
    },
    setError: (error: string) => {
        return {
            type: AuthEvents.SET_ERROR,
            error
        } as const
    },
}

// thunks
export const loginTC = (email: string, password: string, rememberMe: boolean): ThunkAction<void, AppStateType, {}, any> => async (dispatch) => {
    dispatch(authActions.setLoading(true))
    try {
        const data = await authAPI.login(email, password, rememberMe);
        dispatch(authActions.setUserData(data))
    } catch (e:any) {
        const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
        dispatch(authActions.setError(error))
    }
    finally {
        dispatch(authActions.setLoading(false))
    }
}