import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectPostById } from '../../redux/modules/postsSlice';


const PostExcerpt = ({ postId }) => {

    const post = useSelector(state => selectPostById(state, postId))

    const navigate = useNavigate();

    return (
        <li key={post.id}>
            <h1>{post.title}</h1>
            <p>{post.date}</p>
            <button onClick={()=>navigate(`/posts/${post.id}`)}>View</button>
        </li>
    );
}

export default PostExcerpt;