import {createStore, applyMiddleware, combineReducers} from 'redux'

import ReduxPromise from 'redux-promise';

import AccountReducer from './reducers/accountReducer'

const reducers = combineReducers({
    account: AccountReducer,
})

const store = createStore(reducers, applyMiddleware(ReduxPromise))

export default store;