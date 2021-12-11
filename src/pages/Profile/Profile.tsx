import React from 'react'
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {IUser} from "../Login/loginReducer";


function Profile() {
const user = useSelector<AppStateType, IUser | null>(state=>state.auth.user)


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
        </div>
    )
}

export default Profile