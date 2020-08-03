import { setAccount, setToken, setRefreshToken ,removeAccount, removeToken,removeRefreshToken, getAccount} from '../helpers/account';

import {SIGN_IN, SIGN_UP, SIGN_OUT, USER_LOGGED, SIGN_FAIL } from '../actions/accountActions'

const initialState = {
    account: null,
}

export default function(state = initialState, action) {
    const {type, payload} = action;
    
    switch(type) {
        case SIGN_UP:
        case SIGN_IN:

            const response = (payload) ? payload.data : null ;
            const account =  (response) ? response.data : null ;
            const metadata = (response) ? response.metadata : null ;

            const token = metadata ? metadata.token : null
            const refreshToken = metadata ? metadata.Refreshtoken : null
            
            if(account) setAccount(account)
            if(token) setToken(token)
            if(refreshToken) setRefreshToken(refreshToken)

           

            return{...state, account }
        case SIGN_OUT: {
            removeToken();
            removeAccount();
            removeRefreshToken();

            return {...initialState, account: null}
        }
            case USER_LOGGED :{
                const account = getAccount();
                
            return {...state, account}

        }   
            case SIGN_FAIL :{
                const erro = payload
                console.log('**',erro)

            return {...state, erro}

        }   

        default:
            return state ;   
    }
}

