import {createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import {authReducer} from '../components/reducers/authReducer'
import {noteReducer} from '../components/reducers/noteReducer'
import {uiReducer} from '../components/reducers/uiReducer'

const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose

const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: noteReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk)),
)
