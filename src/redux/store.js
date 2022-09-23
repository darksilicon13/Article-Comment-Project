import {configureStore} from '@reduxjs/toolkit';
import postsReducer from './modules/postsSlice';

export default configureStore({
    reducer: {
        posts: postsReducer
    }
})