import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: []
}

const postSlice = createSlice({
    name: "post",
    initialState, 
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload.posts;

        },
        addPost: (state, action) => {
            state.posts.push(action.payload.post);  
        },
        updatePost: (state, action) => {
            const index = state.posts.findIndex(post => post.$id === action.payload.post.$id);  
            if (index !== -1) {
                state.posts[index] = action.payload.post;
            }   
        },
        deletePost: (state, action) => {
            state.posts = state.posts.filter(post => post.$id !== action.payload.postId);
        }
    }
})
export const {setPosts, addPost, updatePost, deletePost} = postSlice.actions;

export default postSlice.reducer;   