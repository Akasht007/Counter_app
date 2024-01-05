import { createSlice } from "@reduxjs/toolkit";



export const counterSlice = createSlice({
    name:'counterApp',
    initialState:{
        value:0
    },
    reducers:{
        //actions are created onside this reducers key
        //logics to update date


        //function to increment number
        increment:(state,action)=>{
            state.value+=action.payload
        },
        decrement:(state,action)=>{
            state.value-= action.payload
        },
        reset:(state)=>{
            state.value=0
        }
    }
})

    //action is requird by component inorder to update state
export const{increment,decrement,reset}=counterSlice.actions

  //reducer is required to store to changes the value

export default counterSlice.reducer