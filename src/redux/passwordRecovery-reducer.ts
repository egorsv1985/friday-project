import {Dispatch} from 'redux';
import {passwordRecoveryAPI} from '../api/passwordRecoveryAPI';


type InitialStateType = {
    email: string
}

const initialState: InitialStateType = {
    email: '',
}

export type PasswordRecoveryActionsType = ReturnType<typeof setEmail>


export const passwordRecoveryReducer = (state = initialState, action: PasswordRecoveryActionsType): InitialStateType => {
    switch (action.type) {
        case 'SET_EMAIL': {
            return {...state, ...action.payload};
        }
        default: {
            return state;
        }
    }
}

export const setEmail = (email: string) => ({
    type: 'SET_EMAIL',
    payload: {email}
} as const);

export const passwordRecovery = (email: string, message: string) => async (dispatch: Dispatch<PasswordRecoveryActionsType>) => {
    try {
        await passwordRecoveryAPI.passRecovery(email, message);
        dispatch((setEmail(email)))
    } catch (e) {
        console.log(e)
    }
}