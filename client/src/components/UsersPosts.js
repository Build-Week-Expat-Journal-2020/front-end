import React, { useState, useEffect } from 'react';
import { getUsersPosts } from '../actions/usersPostsActions';
import { connect } from 'react-redux';

const UsersPosts = (props) => {
    
    useEffect(() => {
        props.getUsersPosts(props.user_id);
    }, []);
      

    return (
        <div>
            <div>
            <h2 style={{color: 'white'}}>This is an individual users page</h2>
            </div>
            <div>
            
                {
                   props.usersPosts.map((post) => (
                       <div>
                            <div>
                                <img src={post.photo} alt=""/>
                            </div>
                            <div>
                                <p>{post.story}</p>
                            </div>
                       </div>
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