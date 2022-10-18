import axios from "axios";
import { LOGIN } from "../types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import Router from "next/router";

const fetchLogin = createAsyncThunk(
    LOGIN,
    async(values)=>{
        try{
            const res = await axios.post('https://dummyjson.com/auth/login',values);
            await Router.push('/posts');
            return res.data
        }catch(e){
            console.log(e)
        }
}
)

export default fetchLogin;