import React from 'react';
import { useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import { selectPostById } from '../redux/modules/postsSlice';

const PostPage = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    const post = useSelector(state=>selectPostById(state, id))

    return (
        <article>
            <code>{post.id}</code>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.date}</p>
            <button onClick={()=>navigate(`/editpost/${id}`)}>Edit</button>
        </article>
    );
}

export default PostPage;