import {instance} from "../../api/instanceAPI";

export const RegistrationAPI = {
    signUp(email: string, password: string) {
        return instance.post<SignUpDataType>('auth/register', {email, password})

    }
}

type SignUpDataType = {
    error?: string
}