import { configureStore } from "@reduxjs/toolkit";
import contactReducer from './features/contactSlice';

const store = configureStore({
  reducer: {
    contactManager: contactReducer
  }
})

export default store;
