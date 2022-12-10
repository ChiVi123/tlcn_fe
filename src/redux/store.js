import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import userReducer from './slice/userSlice';
import cartReducer from './slice/cartSlice';
import categoriesReducer from './slice/categoriesSlice';
import modalReducer from './slice/modalSlice';

const persistConfig = {
    key: 'tlcnFE2022',
    storage,
    blacklist: ['modal', 'categories', 'cart'],
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    categories: categoriesReducer,
    modal: modalReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);
