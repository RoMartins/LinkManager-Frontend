import {createStore, applyMiddleware, combineReducers} from 'redux'

import ReduxPromise from 'redux-promise';

import signInReducer from './pages/Signin/SigninReducer'
import signUpReducer from './pages/Signup/SignupReducer'

const reducers = combineReducers({
    signIn: signInReducer,
    signUp :signUpReducer
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store;