import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createPost } from '../redux/modules/postsSlice';

const AddPost = () => {

    const [titleValue, setTitleValue] = useState('');
    const [contentValue, setContentValue] = useState('');

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onTitleChange = e => setTitleValue(e.target.value);

    const onContentChange = e => setContentValue(e.target.value);

    const onPostSubmit = e => {
        e.preventDefault();
        if (!titleValue || !contentValue) {
            alert('Title or content empty!');
            return;
        }
        dispatch(createPost(titleValue, contentValue));
        setTitleValue('');
        setContentValue('');
        navigate('/');
    }

    return (
        <article>
            <h1>This is the posting page!</h1>
            <form onSubmit={onPostSubmit}>
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

export default AddPost;