import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from "./Routes";


function Profile() {

    return (
        <div>
            <h1>Profile Page</h1>
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <NavLink to={PATH.TEST}>Test Page</NavLink>
                <NavLink to={PATH.SIGN_UP}>Sign Up Page</NavLink>
                <NavLink to={PATH.LOGIN}>Login Page</NavLink>
                <NavLink to={PATH.NEW_PASSWORD}>New Password Page</NavLink>
                <NavLink to={PATH.FORGOT_PASSWORD}>Forgot Password Page</NavLink>
                <NavLink to={PATH.ERROR_404}>404 Error Page</NavLink>
            </div>
        </div>
    )
}

export default Profile