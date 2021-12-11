import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    // baseURL: 'https://back-from-friday-project.herokuapp.com/2.0/'
    baseURL: 'http://localhost:7542/2.0/'
})

export const RegistrationAPI = {
    signUp(email: string, password: string) {
        return instance.post('auth/register', {email, password})

    }
}