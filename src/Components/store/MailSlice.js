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
        deleteItem:(state,action)=>{
            const id = action.payload;
            state.items = state.items.filter((item) => item.id !== id);
        }
    }
})

export const {viewMail,increaseCount,deleteItem}=mailSlice.actions
export default mailSlice.reducer