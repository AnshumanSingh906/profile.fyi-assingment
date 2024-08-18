import { combineReducers } from 'redux';
import cartReducer from './product/reducer';
import wishlistReducer from './authentication/reducer';

const rootReducer = combineReducers({
  product: cartReducer,
  auth: wishlistReducer
});

export default rootReducer;
