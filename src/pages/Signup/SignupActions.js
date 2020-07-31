import {api} from '../../helpers/api'

export const SIGN_UP = 'SIGN_UP'

export const signUpAction = (data) => {
    const payload = api('/auth/sign-up', data)

    return {type: SIGN_UP , payload}
}