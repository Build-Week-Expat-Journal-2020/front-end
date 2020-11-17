import React, { useState, useEffect } from 'react';
import { getUsersPosts } from '../actions/usersPostsActions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from './Post';

const UsersPosts = (props) => {
    const { id } = useParams();

    useEffect(() => {

        props.getUsersPosts(id);

    }, []);
      
    // username of clicked = username 
    // set url to /${username}
    //this url renders usersPosts

    return (
        <div>
            <div>
    <h2 style={{color: 'white'}}>{props.user_id}This is an individual users page</h2>
            </div>
            {/* <div>
            
                {
                   props.usersPosts.map((post) => (

                       <Post post={post} />

                   )) 
                }
            </div> */}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user_id: state.posts.user_id
    }
}

export default connect(mapStateToProps, { getUsersPosts })(UsersPosts);