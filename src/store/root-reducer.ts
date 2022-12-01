import { combineReducers } from 'redux'
import cartReducer from './reducers/user/cart/cart.reducer'
import userReducer from './reducers/user/user.reducer'

const rootReducer = combineReducers({
  userReducer,
  cartReducer
})

export default rootReducer
