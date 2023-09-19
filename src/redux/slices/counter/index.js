import {createSlice} from "@reduxjs/toolkit"
// import { counterSlice } from './index';

export const counterSlice = createSlice(
    {
        initialState:0,
        name:"counter",
        reducers:{
            increament:(state)=>{ return state+1},
            decreament:(state)=>{return state-1},
            // reducers made increament , decreament as events
    }
})

export const{increament,decreament}=counterSlice.actions;
// events exported
export default counterSlice.reducer