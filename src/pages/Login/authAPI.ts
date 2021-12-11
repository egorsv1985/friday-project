import axios from "axios";
import {IUser} from "./loginReducer";

export const baseURL = 'https://neko-back.herokuapp.com/2.0/';


export const instance = axios.create({
    baseURL: baseURL,
    withCredentials: true
})




export const authAPI = {
    login: async (email: string, password:string, rememberMe:boolean) => {
        const response = await instance.post<IUser>('auth/login', {email, password, rememberMe})
        return response.data
    }
}
