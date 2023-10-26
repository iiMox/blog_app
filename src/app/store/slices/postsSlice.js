import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action) => [...action.payload],
    },
});

export const getPostsState = (state) => state.posts;

export const { setPosts } = postsSlice.actions;

export default postsSlice.reducer;
