import React, {useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {createPost} from '../redux/modules/postSlice';

const PostingPage = () => {
    const titleRef = useRef(null);
    const contentRef = useRef(null);

    const navigate = useNavigate();

    const dispatch = useDispatch();

    const onPostSubmit = () => {
        // console.log(titleRef.current.value);
        // console.log(contentRef.current.value);
        dispatch(createPost(titleRef.current.value, contentRef.current.value))
        navigate('/');
    }

    return ( 
        <article>
            <h1>This is the posting page!</h1>
            <form onSubmit={onPostSubmit}>
                {/* title input */}
                <label htmlFor='title'>Title</label><br/>
                <input type="text" ref={titleRef} id='title' autoFocus/><br/>
                {/* content input */}
                <label htmlFor='content'>Content</label><br/>
                <textarea ref={contentRef} id='content'/><br/>
                <button type="submit">Submit</button>
            </form>
        </article>
     );
}
 
export default PostingPage;