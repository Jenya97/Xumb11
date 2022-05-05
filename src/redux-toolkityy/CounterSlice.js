import { createSlice } from "@reduxjs/toolkit";


const initialState={
    c:0
    }


export const counterSlice=createSlice({
name:'counter',
initialState,
reducers:{
    decrement:(state)=>{
        state.c-=1
    },
    increment:(state)=>{
         state.c+=1
    },
    reset:(state)=>{
       state.c=0
    }
},
})


export const {decrement,increment,reset}=counterSlice.actions;
export default counterSlice.reducer