import React from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useFormik} from "formik";
import {inputNewPassword, RecoveryStatusType} from "../../redux/passwordRecovery-reducer";
import {AppStateType} from "../../redux/store";


type FormikErrorType = {
    password?: string
}

function NewPassword() {
    const {token} = useParams<{ token: string }>()

    const dispatch = useDispatch();
    const appStatus = useSelector<AppStateType, RecoveryStatusType>(state => state.app.status);
    const appError = useSelector<AppStateType, string>(state => state.app.error);



    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validate: (values) => {
            const errors: FormikErrorType = {};
            if (values.password.length < 3) {
                errors.password = 'Min length 7 symbols';
            }
            return errors;
        },
        onSubmit: (values) => {
            dispatch(inputNewPassword(values.password, token))
        },
    })

    return (
        <div>
            <h1>New Password Page</h1>
            <div>Create new password</div>

            <form onSubmit={formik.handleSubmit}>
                <div>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete='off'
                        disabled={appStatus === 'loading'}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        placeholder="password"
                        onBlur={formik.handleBlur}
                    />
                </div>

                {formik.touched.password && formik.errors.password &&
                <div style={{color: 'red'}}>{formik.errors.password}</div>}
                {appError && <div style={{color: 'red'}}>{appError}</div>}

                <p>Create new password and we will send you further instructions to email</p>

                <button type="submit" disabled={appStatus === 'loading'}>Create new password</button>
            </form>
        </div>
    )
}

export default NewPassword