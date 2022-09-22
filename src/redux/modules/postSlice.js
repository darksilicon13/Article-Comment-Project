import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: {
            reducer(state, action) {
                state.push(action.payload);
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        date: new Date().toISOString(),
                        title,
                        content
                    }
                }
            }
        },
        readPost: (state, action) => {

        },
        updatePost: (state, action) => {

        },
        deletePost: (state, action) => {

        }
    }
})

export const { createPost, readPost, updatePost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;