import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./AuthSice"; 

export const store = configureStore({
    reducer: {
        auth: authReducer 
    }
});