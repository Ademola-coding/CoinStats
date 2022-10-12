/* eslint-disable */
import { configureStore } from '@reduxjs/toolkit';
import CryptoReducer, { fetchCryptos } from './CryptoSlice';

export const store = configureStore({ reducer: { crypto: CryptoReducer } });
store.dispatch(fetchCryptos());
