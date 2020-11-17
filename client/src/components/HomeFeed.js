
import { StyledFeed } from '../StyledComponents/StyledPosts'
import { connect } from 'react-redux';
import { getPosts } from '../actions/postsActions'
import React, { useEffect, useState } from 'react'
import Post from './Post';

const HomeFeed = (props) => {

    const initialValues = {
        photo: '',
        story:'',
    }

    const [createPost, setCreatePosts] = useState(initialValues)

    useEffect(() => {
        props.getPosts()
        console.log('posts', props.posts)
     }, [])

     const handleChange = e => {
        setCreatePosts({...createPost, [e.target.name]: e.target.value})
     }

     const handleSubmit = e => {
        e.preventDefault()
        console.log('post info!',createPost)
     }

    return (

        <StyledFeed>
            <div className='container'>
                <form onSubmit={handleSubmit}>
                    <input 
                    type='text'
                    name='photo'
                    placeholder='photo'
                    value={createPost.name}
                    onChange={handleChange}
                    />
                    <input 
                    type='textarea'
                    name='story'
                    placeholder='story'
                    value={createPost.story}
                    onChange={handleChange}
                    />
                <button>add post</button>
                </form>
                <div className='postsContainer'>
                {props.posts.map(post => {
                    return (
                        <div>
                            <Post key={post.id} post={post} />
                        </div>
                    )
                })}
                </div>
            </div>
            
        </StyledFeed>
    )
}

const mapStateToProps = (state) => {
    return {
        posts: state.posts,
    }
}

export default connect(mapStateToProps, { getPosts })(HomeFeed);