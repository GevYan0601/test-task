import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/user";
import postsReducer from "./reducer/posts";

const store = configureStore({
    reducer:{
        user: userReducer,
        posts: postsReducer
    }
})

export default store;