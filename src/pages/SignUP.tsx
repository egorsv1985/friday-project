import React from 'react'
import {useFormik} from "formik";

type FormikErrorType = {
    email?: string
    password?: string
    confirmPassword?: string
}

function SignUp() {

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
            } else if ( values.password.length < 3) {
                errors.password = 'Length password should be 3 symbols';
            }

            if (!values.confirmPassword) {
                errors.confirmPassword = 'Required';
            } else if ( values.confirmPassword.length < 3) {
                errors.confirmPassword = 'Length password should be 3 symbols';
            }

            return errors;
        },
        onSubmit: values => {
            console.log(values)
            formik.resetForm()
        },
    })

    return (
        <div>
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

                {formik.touched.password && formik.errors.password && <div style={{color: 'red'}}>{formik.errors.password}</div>}

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

                {formik.touched.confirmPassword && formik.errors.confirmPassword && <div style={{color: 'red'}}>{formik.errors.confirmPassword}</div>}

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default SignUp