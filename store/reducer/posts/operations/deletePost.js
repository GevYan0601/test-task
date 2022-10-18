import axios from "axios";
import { DELETE_POST } from "../types";
import { createAsyncThunk } from "@reduxjs/toolkit";

const deletePost = createAsyncThunk(
    DELETE_POST,
    async(id)=>{
        try{
            const res = await axios.delete(`https://dummyjson.com/posts/${id}`);
            return res.data.id
        }catch(e){
            console.log(e)
        }
    }
)

export default deletePost;