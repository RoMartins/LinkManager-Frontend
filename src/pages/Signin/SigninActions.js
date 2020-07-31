import api from "../../helpers/api"


export const SIGN_IN = 'SIGN_IN'

export const signInAction = (data) => {
    const payload = api('/auth/sign-in' , data)

    return {type: SIGN_IN , payload}
} 