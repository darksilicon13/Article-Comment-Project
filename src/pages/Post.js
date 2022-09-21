import React from 'react';
import {useParams} from 'react-router-dom';

const PostPage = () => {
    const {id} = useParams();

    return (
        <article>
            <h1>This is the post #{id} page!</h1>
        </article>
    );
}

export default PostPage;