import { configureStore } from '@reduxjs/toolkit';

import counterReducer from '../features/Counter/counterSlice';
const rootReducer = {
  ten_tu_dat: counterReducer,
};
const store = configureStore({
  reducer: rootReducer,
});

export default store;
