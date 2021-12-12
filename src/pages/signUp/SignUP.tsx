import React from 'react'
import {useFormik} from "formik";
import {RequestStatusType, setErrorRegistrationAC, setNewUserTC} from "./signUp-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";
import {PATH} from "../Routes";
import {Preloader} from "../Login/Preloader";

type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string
}

function SignUp() {

    const error = useSelector<AppStateType, string | null>(state => state.signUp.error)
    const status = useSelector<AppStateType, RequestStatusType>(state => state.signUp.status)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            confirmPassword: ''
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (!values.email) {
                errors.email = 'Required';
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address';
            }

            if (!values.password) {
                errors.password = 'Required';
            } else if (values.password.length < 8) {
                errors.password = 'Length password should be 8 symbols';
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required';
            } else if (values.confirmPassword.length < 8) {
                errors.confirmPassword = 'Length password should be 8 symbols';
            } else if (values.password !== values.confirmPassword) {
                dispatch(setErrorRegistrationAC('Please make sure you passwords match'));
            }

            return errors;
        },
        onSubmit: values => {

            dispatch(setNewUserTC(values.email, values.password))
            formik.resetForm()
        }
    })

    if (status === 'succeeded') {
        return <Redirect to={PATH.LOGIN}/>
    }

    return (
        <>
            {status === 'loading' && <Preloader/>}
            <h1>Sign Up Page</h1>
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

                <div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="Password"
                        onBlur={formik.handleBlur}
                    />
                </div>

                {formik.touched.password && formik.errors.password &&
                <div style={{color: 'red'}}>{formik.errors.password}</div>}

                <div>
                    <input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.confirmPassword}
                        placeholder="Confirm password"
                        onBlur={formik.handleBlur}
                    />
                </div>

                {formik.touched.confirmPassword && formik.errors.confirmPassword &&
                <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div>}

                <button type="button" onClick={formik.handleReset}>Cancel</button>
                <button type="submit" disabled={status === 'loading'}>Sign Up</button>
            </form>
            {error !== null && <div style={{color: 'red'}}>{error}</div>}
        </>
    )
}


export default SignUp