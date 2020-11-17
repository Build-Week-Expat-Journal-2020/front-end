import React, { useState, useEffect } from 'react';
import { getUsersPosts } from '../actions/usersPostsActions';
import { connect } from 'react-redux';

const UsersPosts = (props) => {
    
    useEffect(() => {
        console.log(props.user_id);
        props.getUsersPosts(props.user_id);
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
                       <div>
                            <div>
                                <img src={post.posted_by} alt=""/>
                            </div>
                            <div>
                                <div>
                                <p>{post.story}</p>
                                </div>
                            </div>
                       </div>
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