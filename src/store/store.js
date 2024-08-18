import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // default localStorage for web
import {thunk} from 'redux-thunk';
import rootReducer from './root-reducer';
import logger from 'redux-logger';

// Configuration for redux-persist
const persistConfig = {
  key: 'root', // Key to store the persist data
  storage, // Storage engine
  whitelist: ['product'] // (Optional) List of reducers you want to persist
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Create the Redux store
const store = createStore(
  persistedReducer,
  applyMiddleware(thunk,logger)
);

// Create a persistor
const persistor = persistStore(store);

export { store, persistor };
