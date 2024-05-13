// reducers/index.js
import { combineReducers } from '@reduxjs/toolkit';
import eventReducer from './slices/wishlistSlice';

const rootReducer = combineReducers({
    // La clé 'events' détermine le nom de l'espace dans le state global
    wishlist: eventReducer,
});

export default rootReducer;

