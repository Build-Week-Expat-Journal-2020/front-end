
import { StyledFeed } from '../StyledComponents/StyledPosts'
import { connect } from 'react-redux';
import { getPosts } from '../actions/postsActions'
import React, { useEffect } from 'react'


const HomeFeed = (props) => {

    useEffect(() => {
        props.getPosts()
        console.log('posts', props.posts)
     }, [])

    return (

        <StyledFeed>
            <div className='container'>
                <p>expat </p>
                <button className='loadFeed'>load feed</button>
                <div className='postsContainer'>
                {console.log('posts', props.posts)}
                {props.posts.map(post => {
                    return (
                        <div>
                        <img width='200px' src={post.photo}/>
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