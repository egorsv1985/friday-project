const SET_PROFILE = "SET-PROFILE"


const initialState = {
    name: 'Aleksandr',
    age: 23
}

type initialStateType = typeof initialState

export const profileReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "SET-PROFILE": {
            return {...state, name: action.name, age: action.age}
        }
        default :
            return state
    }

}

type ActionsType = setProfileActionType

export type setProfileActionType = ReturnType<typeof setProfileAction>
export const setProfileAction = (name: string, age: number) => {
    return {
        type: SET_PROFILE,
        name, age
    } as const
}

