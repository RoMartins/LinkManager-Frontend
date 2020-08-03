import {api} from '../helpers/api'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const USER_LOGGED = 'USER_LOGGED'
export const SIGN_FAIL = 'SIGN_FAIL'




export const signUpAction = (data) => {
    const payload = api('/auth/sign-up', data)

    return {type: SIGN_UP , payload}
}


export const signInAction = async (data) => {
    const payload = await api('/auth/sign-in' , data)

    if(payload == 'Credenciais inválidas') {
        return {type: SIGN_FAIL ,payload} }
    else{
        return {type: SIGN_IN , payload}
    }
    
} 

export const signOut = (data) => {

    return {type: SIGN_OUT , payload: {}}
} 

export const checkLogged = () => {

    return {type: USER_LOGGED , payload: {}}
} 