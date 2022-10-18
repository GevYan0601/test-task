import { ADD_NEW_POST } from "../types";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const addNewPost = createAsyncThunk(
    ADD_NEW_POST,
    async(values,thunkAPI)=>{
        try{
            const user = thunkAPI.getState().user;
            const res = await axios.post(`https://dummyjson.com/posts/add`,{
                title: values.title,
                userId: user.id
            });
            return res.data 
        }catch(e){
            console.log(e)
        }
    }
)

export default addNewPost;