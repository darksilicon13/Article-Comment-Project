import React from 'react';
import {useNavigate} from 'react-router-dom';
import PostsList from '../components/post/PostsList';

const MainPage = () => {

    const navigate = useNavigate();
    
    return (
        <article>
            <button onClick={() => navigate('/addpost')}>Add New Post</button>
            <h1>This is the main page!</h1>
            <PostsList/>
        </article>
    );
}
 
export default MainPage;