import {createStore, combineReducers, applyMiddleware} from 'redux'
import {profileReducer} from "./profile-reducer";
import thunkMiddleWare from 'redux-thunk'


let rootReducers = combineReducers({
    profile: profileReducer,
})


export type AppStateType = ReturnType<typeof rootReducers>
export type storeType = typeof store
const store = createStore( rootReducers, applyMiddleware(thunkMiddleWare))

export default store

// @ts-ignore
window.store = store;

