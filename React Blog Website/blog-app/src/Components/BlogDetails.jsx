import React from 'react'
import { useParams } from 'react-router-dom'
import UseFetch from '../UseFetch';
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isPending } = UseFetch('http://localhost:3000/blogs/' + id);
    const navigate = useNavigate();

    const handleClick = () => {
        fetch('http://localhost:3000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate('/');
        })
    }

    return (
    <div className='blog-details'>
        { isPending && <div>Loading...</div>}
        { error && <div>{ error }</div>}
        { blog && (
            <article>
                <h2>{ blog.title }</h2>
                <p>Written by { blog.author}</p>
                <div>{ blog.body }</div>
                <button onClick={handleClick}>Delete</button>
            </article>
        )}
    </div>
  )
}

export default BlogDetails