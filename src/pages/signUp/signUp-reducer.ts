import {Dispatch} from "redux";
import {RegistrationAPI} from "./signUp-api";


const SET_NEW_USER = "SET_NEW_USER"
const SET_ERROR_REGISTRATION = "SET_ERROR_REGISTRATION"
const SET_STATUS_REGISTRATION = "SET_STATUS_REGISTRATION"

const initialState: initialStateType = {
    status: 'idle',
    newUser: {},
    error: null
}

type initialStateType = {
    status: RequestStatusType
    newUser: {}
    error: string | null
}

export const signUpReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET_NEW_USER": {
            return {...state, newUser: action.payload}
        }
        case "SET_ERROR_REGISTRATION": {
            return {...state, error: action.error}
        }
        case "SET_STATUS_REGISTRATION": {
            return {...state, status: action.status}
        }

        default :
            return state
    }

}

//action
export const setNewUserAC = (payload: initialStateType) => {
    return {
        type: SET_NEW_USER,
        payload
    } as const
}
export const setErrorRegistrationAC = (error: string) => {
    return {
        type: SET_ERROR_REGISTRATION,
        error
    } as const
}
export const setStatusRegistrationAC = (status: RequestStatusType) => {
    return {
        type: SET_STATUS_REGISTRATION,
        status
    } as const
}


export const setNewUserTC = (email: string, password: string) => (dispatch: Dispatch) => {
    dispatch(setStatusRegistrationAC('loading'))
    RegistrationAPI.signUp(email, password)
        .then((res) => {
            dispatch(setNewUserAC(res.data))
            dispatch(setStatusRegistrationAC('succeeded'))
        })
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ", more details in the console")
            dispatch(setErrorRegistrationAC(error))
            dispatch(setStatusRegistrationAC('failed'))
        })
}


//types
export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
type ActionsType = setProfileActionType | setErrorRegistrationActionType | setStatusRegistrationActionType

export type setProfileActionType = ReturnType<typeof setNewUserAC>
export type setErrorRegistrationActionType = ReturnType<typeof setErrorRegistrationAC>
export type setStatusRegistrationActionType = ReturnType<typeof setStatusRegistrationAC>


