import React from 'react'
import {useFormik} from "formik";
import {NavLink, Redirect, useHistory} from "react-router-dom";
import {PATH} from "./Routes";
import {useDispatch} from "react-redux";
import {passwordRecovery, setEmail} from "../redux/passwordRecovery-reducer";

type FormikErrorType = {
    email?: string
}

function ForgotPassword() {
    const messageForEmail = `<div style={{'backgroundColor': 'lime', 'padding': '15px'}}>Password recovery link:<a href='http://localhost:3000/friday-project#/set-new-password/$token$'> link</a></div>`



    const dispatch = useDispatch();
    const history = useHistory();

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
            history.push(PATH.CHECK_EMAIL)
        },
    })



    return (
        <div>
            <h3>Forgot your password?</h3>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder="Email"
                            onBlur={formik.handleBlur}
                        />
                    </div>

                    {formik.touched.email && formik.errors.email && <div style={{color: 'red'}}>{formik.errors.email}</div>}

                    <p>Enter your email address and we will send you further instructions</p>

                    <button type="submit">Send Instructions </button>
                </form>
                <p>Did you remember your password?</p>
                <NavLink to={PATH.LOGIN}>Try logging in</NavLink>
            </div>
        </div>
    )
}

export default ForgotPassword
