import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counterSlice';
// 配置store信息,Create a Redux Store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});