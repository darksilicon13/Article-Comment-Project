import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useNavigate, useParams} from 'react-router-dom';
import { deletePost, selectPostById } from '../redux/modules/postsSlice';

const PostPage = () => {
    const {id} = useParams();

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const post = useSelector(state=>selectPostById(state, id))

    return (
        <article>
            <button onClick={()=>navigate('/')}>Home</button><br/>
            <code>{post.id}</code>
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <p>{post.date}</p>
            <button onClick={()=>navigate(`/editpost/${id}`)}>Edit</button>
            <button onClick={()=> {
                dispatch(deletePost({id}));
                navigate('/');
            }}>delete</button>
        </article>
    );
}

export default PostPage;