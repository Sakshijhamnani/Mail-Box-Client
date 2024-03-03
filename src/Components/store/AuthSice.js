import {createSlice} from '@reduxjs/toolkit';

const intialAuthState={
    token:null,
    email:null,
    isLogin:false
}

export const authSlice=createSlice({
     name:'Auth',
     initialState:intialAuthState,
     reducers:{
        loginUser:(state,action)=>{
            state.isLogin=true;
            console.log(state.isLogin)
            state.token=action.payload[0];
            state.email=action.payload[1];
            localStorage.setItem('token',state.token);
            localStorage.setItem('email',state.email);
        },
        logoutUser :(state)=>{
            state.isLogin=false;
            state.token=null;
            state.email=null;
            localStorage.removeItem('token');
            localStorage.removeItem('email');
        }
     }
});

export const {loginUser,logoutUser}=authSlice.actions
export default authSlice.reducer