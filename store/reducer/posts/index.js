import { createReducer } from "@reduxjs/toolkit";
import addNewPost from "./operations/addNewPost";
import deletePost from "./operations/deletePost";
import fetchPosts from "./operations/fetchPosts";
import { LOG_OUT } from "./types";

const postsReducer = createReducer([],(builder)=>{
    builder
        .addCase(fetchPosts.fulfilled, (state,action)=>{
            return action.payload
        })
        .addCase(deletePost.fulfilled, (state,action)=>{
            const newState = [...state]
            const objId = newState.findIndex((obj)=> obj.id === action.payload)
            newState.splice(objId,1)
            return newState
        })
        .addCase(addNewPost.fulfilled, (state,action)=>{
            return [action.payload,...state]
        })
        .addCase(LOG_OUT,()=>{
            return []
        })
})

export default postsReducer;