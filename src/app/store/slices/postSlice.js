import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    body: "",
    image: "",
};

export const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPost: (state, action) => ({ ...action.payload }),
    },
});

export const getPostState = (state) => state.post;

export const { setPost } = postSlice.actions;

export default postSlice.reducer;
