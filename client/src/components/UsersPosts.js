import React, { useState, useEffect } from 'react';
import { getUsersPosts } from '../actions/usersPostsActions';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Post from './Post';
import { StyledPost } from '../StyledComponents/StyledPost'

const UsersPosts = (props) => {
    const { id } = useParams();

    useEffect(() => {
        props.getUsersPosts(id);
    }, []);
      

    return (
        <StyledPost>
            <div>
                <div className='postedBy'>
                    <h3 style={{color: 'white'}}>User Name</h3>
                </div>
                <div>
                    {
                    props.usersPosts.map((post) => (
                        <Post post={post} />
                    )) 
                    }
                </div>
            </div>
        </StyledPost>
    )
}

const mapStateToProps = (state) => {
    return {
        usersPosts: state.usersPosts,
    }
}

export default connect(mapStateToProps, { getUsersPosts })(UsersPosts);