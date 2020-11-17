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
      

    return (
        <div>
            <div>
            <h2 style={{color: 'white'}}>This is an individual users page</h2>
            </div>
            <div>
            
                {
                   props.usersPosts.map((post) => (
                       <Post post={post} />
                   )) 
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        usersPosts: state.usersPosts
    }
}

export default connect(mapStateToProps, { getUsersPosts })(UsersPosts);