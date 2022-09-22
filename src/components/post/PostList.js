import React from 'react';
import {useSelector} from 'react-redux';

const PostList = () => {

    const posts = useSelector(state=>state.posts);

    return (
        <div>
            <h1>Post List</h1>
        </div>
    );
}

export default PostList;