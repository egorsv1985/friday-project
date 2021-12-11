import React from 'react'
import {useSelector} from "react-redux";
import {AppStateType} from "../redux/store";


function CheckEmail() {

    const email = useSelector<AppStateType, string>(state => state.passwordRecovery.email)

    return (
        <div>
            <img src="https://www.epclibrary.com/about-us/email.jpeg/@@images/image.jpeg"
                 alt="email"
                style={{width:'180px', height:'180px'}}/>
            <h3>Check Email</h3>
            <p>We've sent an Email with instructions to {email}</p>
        </div>
    )
}

export default CheckEmail
