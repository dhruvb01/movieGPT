import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gptsearch",
initialState:false,
reducers:{
    change:(state)=>{
  return !state
    }
}
})
export const {change}=gptSlice.actions
    export default gptSlice.reducer