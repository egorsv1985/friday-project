import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {IUser, logoutTC} from "../Login/loginReducer";


function Profile() {
const user = useSelector<AppStateType, IUser | null>(state=>state.auth.user)
const dispatch = useDispatch()

const logout = () => {
    dispatch(logoutTC())
}



    return (
        <div>
            <div>
                {
                user !== null? <div>
                    <img src={user.avatar} alt='avatar'/>
                    <p/>
                    Name: {user.name}
                    <p/>
                    E-Mail: {user.email}
                    <p/>
                </div> : 'No data'

                }
            </div>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Profile