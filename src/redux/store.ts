import {applyMiddleware, combineReducers, createStore} from 'redux'
import {profileReducer} from "./profile-reducer";
import thunkMiddleWare from 'redux-thunk'
import {signUpReducer} from "../pages/signUp/signUp-reducer";


let rootReducers = combineReducers({
    profile: profileReducer,
    signUp: signUpReducer
})


export type AppStateType = ReturnType<typeof rootReducers>
export type storeType = typeof store
const store = createStore(rootReducers, applyMiddleware(thunkMiddleWare))

export default store

// @ts-ignore
window.store = store;

