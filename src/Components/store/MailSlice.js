import { createSlice } from "@reduxjs/toolkit"


const initialState={
    items:[],
    count:0
}

export const mailSlice=createSlice({
    name:'mails',
    initialState,
    reducers:{
        viewMail:(state,action)=>{
          
            state.items=[...action.payload]
        },
        increaseCount: (state, action) => {
            state.count = action.payload;
          },
    }
})

export const {viewMail,increaseCount}=mailSlice.actions
export default mailSlice.reducer