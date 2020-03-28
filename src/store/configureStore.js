

import { createStore, combineReducers, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import formreducer from './reducers/places';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, formreducer)


let store = createStore(persistedReducer)
let persistor = persistStore(store)

export default { store, persistor }