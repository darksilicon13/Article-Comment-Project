import {createSlice, nanoid} from '@reduxjs/toolkit';

const initialState = [];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: (state, action) => {

        },
        readPost: (state, action) => {

        },
        updatePost: (state, action) => {

        },
        deletePost: (state, action) => {

        }
    }
})

export const {createPost, readPost, updatePost, deletePost} = postsSlice.actions;

export default postsSlice.reducer;