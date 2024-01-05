import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";



export const store =configureStore({
    //reducer can only update of state in store
    //reducer is predefined and it is an object
    reducer:{
        //reducer is coming from counterslice since we are export reducer as export default
        counter:counterSlice
    }
})
