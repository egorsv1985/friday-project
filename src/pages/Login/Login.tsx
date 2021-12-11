import React from 'react'
import {Field, Form, FormikProps} from "formik";
import {NavLink} from 'react-router-dom'
import {PATH} from "../Routes";

type LoginPropsType = FormikProps<any>


export const Login: React.FC<LoginPropsType> =
    ({handleSubmit, getFieldProps }) => {

        return (
            <>
                <Form onSubmit={handleSubmit}>
                    <label>Email</label>
                    <input
                        id="email"
                        type="email"
                        {...getFieldProps('email')}
                    />
                    <label>Password</label>
                    <input
                        id="email"
                        type="password"
                        {...getFieldProps('password')}
                    />
                    <label>Remember me</label>
                    <input
                        id="rememberMe"
                        type="checkbox"
                        {...getFieldProps('rememberMe')}
                    />
                    <button type={'submit'}>Login</button>
                </Form>
                <NavLink to={PATH.SIGN_UP}>
                    Sign up
                </NavLink>

            </>

        )
    }

export default Login