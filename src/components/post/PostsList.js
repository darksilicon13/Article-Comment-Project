import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostIds } from '../../redux/modules/postsSlice';
import PostExcerpt from './PostExcerpt';

const PostsList = () => {

    const postIds = useSelector(selectPostIds);

    const renderedPosts = postIds.map(postId => (<PostExcerpt key={postId} postId={postId} />))

    return (
        <ul>
            {renderedPosts}
        </ul>
    );
}

export default PostsList;