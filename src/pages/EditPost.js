import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { updatePost, selectPostById } from '../redux/modules/postsSlice';

const EditPost = () => {

    const {id} = useParams();

    const post = useSelector(state=>selectPostById(state, id));

    const [titleValue, setTitleValue] = useState(post.title);
    const [contentValue, setContentValue] = useState(post.content);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onTitleChange = e => setTitleValue(e.target.value);

    const onContentChange = e => setContentValue(e.target.value);

    const onEditSubmit = e => {
        e.preventDefault();
        if (!titleValue || !contentValue) {
            alert('Title or content empty!');
            return;
        }
        dispatch(updatePost({
            id: post.id,
            title: titleValue,
            content: contentValue
        }));
        setTitleValue('');
        setContentValue('');
        navigate(`/posts/${id}`);
    }

    return (
        <article>
            <h1>This is the post editing page!</h1>
            <form onSubmit={onEditSubmit}>
                {/* title input */}
                <label htmlFor='title'>Title</label><br />
                <input
                    type="text"
                    value={titleValue}
                    onChange={onTitleChange}
                    id='title'
                    autoFocus /><br />
                {/* content input */}
                <label htmlFor='content'>Content</label><br />
                <textarea
                    value={contentValue}
                    onChange={onContentChange}
                    id='content' /><br />
                <button type="submit">submit</button>
            </form>
        </article>
    );
}

export default EditPost;