import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './modules/postSlice';

export default configureStore({
    reducer: {
        posts: postsReducer
    }
})