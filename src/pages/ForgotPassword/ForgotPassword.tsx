import React from 'react'
import {useFormik} from "formik";
import {NavLink, Redirect} from "react-router-dom";
import {PATH} from "../Routes";
import {useDispatch, useSelector} from "react-redux";
import {passwordRecovery, RecoveryStatusType} from "../../redux/passwordRecovery-reducer";
import {AppStateType} from "../../redux/store";

type FormikErrorType = {
    email?: string
}

function ForgotPassword() {
    const messageForEmail = `<div style={{'backgroundColor': 'lime', 'padding': '15px'}}>Password recovery link:<a href='http://localhost:3000/friday-project#/set-new-password/$token$'> link</a></div>`


    const dispatch = useDispatch();
    const appStatus = useSelector<AppStateType, RecoveryStatusType>(state => state.app.status);
    const appError = useSelector<AppStateType, string>(state => state.app.error);

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(passwordRecovery(values.email, messageForEmail))
        },
    })


    if (appStatus === 'succeeded') {
        return <Redirect to={PATH.CHECK_EMAIL}/>
    }

    return (
        <div>
            <h3>Forgot your password?</h3>
            {appStatus === 'loading' && <p style={{color: "green", margin: 0}}>Loading...</p>}
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            disabled={appStatus === 'loading'}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="Email"
                            onBlur={formik.handleBlur}
                        />
                    </div>

                    {formik.touched.email && formik.errors.email &&
                    <div style={{color: 'red'}}>{formik.errors.email}</div>}
                    {appError && <div style={{color: 'red'}}>{appError}</div>}

                    <p>Enter your email address and we will send you further instructions</p>

                    <button type="submit" disabled={appStatus === 'loading'}>Send Instructions</button>
                </form>
                <p>Did you remember your password?</p>
                <NavLink to={PATH.LOGIN}>Try logging in</NavLink>
            </div>
        </div>
    )
}

export default ForgotPassword
