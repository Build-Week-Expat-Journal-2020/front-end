
import { StyledFeed } from '../StyledComponents/StyledPosts'
import { connect } from 'react-redux';
import { getPosts } from '../actions/postsActions'
import { createPost } from '../actions/createPostActions'
import React, { useEffect, useState } from 'react'
import Post from './Post';

const HomeFeed = (props) => {

    const initialValues = {
        photo: '',
        story:'',
        user_id: '',
    }

    const [newPost, setNewPosts] = useState(initialValues)

    useEffect(() => {
        props.getPosts()
        console.log("Current user: ", props.currentUser);
    }, [])

     const handleChange = e => {
        setNewPosts({...newPost, [e.target.name]: e.target.value})
     }

     const handleSubmit = e => {
        e.preventDefault()
        props.createPost({...newPost, user_id: props.currentUser.id })
     }

    return (

        <StyledFeed>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <input 
                    type='text'
                    name='photo'
                    placeholder='photo'
                    value={newPost.name}
                    onChange={handleChange}
                    />
                    <input 
                    type='textarea'
                    name='story'
                    placeholder='story'
                    value={newPost.story}
                    onChange={handleChange}
                    />
                <button>add post</button>
                </form>
                <div className='postsContainer'>
                {props.posts.map(post => {
                    return (
                        
                            <Post key={post.id} post={post} />
                        
                    )
                })}
                </div>
            </div>
            
        </StyledFeed>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.currentUser,
        posts: state.posts,
    }
}

export default connect(mapStateToProps, { getPosts, createPost})(HomeFeed);