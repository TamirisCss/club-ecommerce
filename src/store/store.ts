import { createStore, applyMiddleware } from 'redux'
import rootReducer from './root-reducer'
import thunk from 'redux-thunk'

const store = createStore(rootReducer, applyMiddleware(thunk))

export type RootState = ReturnType<typeof store.getState>

export default store
