import fetchLogin from "./operations/fetchLogin";
import { createReducer } from "@reduxjs/toolkit";
import { LOG_OUT } from "../posts/types";

const userReducer = createReducer({},(builder)=>{
    builder
        .addCase(fetchLogin.fulfilled,(state,action)=>{
            return action.payload

        })
        .addCase(LOG_OUT,()=>{
            return {}
        })
})

export default userReducer;