import { createEntityAdapter, createSlice, nanoid } from '@reduxjs/toolkit';

const postsAdapter = createEntityAdapter({
    sortComparer: (a, b) => b.date.localeCompare(a.date)
});

const initialState = postsAdapter.getInitialState();

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        createPost: {
            reducer(state, action) {
                const post = action.payload;
                state.ids.push(post.id);
                state.entities[post.id] = post;
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
        updatePost: (state, action) => {
            const { id, title, content } = action.payload;
            const existingPost = state.entities[id];
            if (existingPost) {
                existingPost.title = title;
                existingPost.content = content;
            }
        },
        deletePost: (state, action) => {
            state.ids = state.ids.filter(id => id !== action.payload.id);
            delete state.entities[action.payload.id];
        }
    }
})

export const { createPost, updatePost, deletePost } = postsSlice.actions;

export default postsSlice.reducer;

export const {
    selectAll: selectAllPosts,
    selectById: selectPostById,
    selectIds: selectPostIds
} = postsAdapter.getSelectors(state => state.posts)