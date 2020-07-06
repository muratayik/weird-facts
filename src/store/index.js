import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import auth from './auth/reducer'
import user from './user/reducer'
import animal from './animal/reducer'


export const rootReducer = combineReducers({ animal, auth, user })

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));