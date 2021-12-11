import {instance} from "./instanceAPI";

type RecoveryResponseType = {
    info: string
    error?: string
}

export const passwordRecoveryAPI = {
    passRecovery(email: string, message: string) {
        return instance.post<RecoveryResponseType>('auth/forgot', {email, message, from: "front-admin <demid.kbr@mail.ru>"});
    },
    inputNewPass(password: string, resetPasswordToken: string | undefined) {
        return instance.post<RecoveryResponseType>('auth/set-new-password', {password, resetPasswordToken})
    }
}