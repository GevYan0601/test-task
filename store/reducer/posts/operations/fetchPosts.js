import { GET_POSTS } from "../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const fetchPosts = createAsyncThunk(
    GET_POSTS,
    async(data, thunkAPI)=>{
        try{
            const user = thunkAPI.getState().user;
            const res = await axios.get(`https://dummyjson.com/posts/user/${user.id}`);
            return res.data.posts
        }catch(e){
            console.log(e)
        }
    }
)

export default fetchPosts;