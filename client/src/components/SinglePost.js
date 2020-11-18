import { useEffect } from 'react';
import Post from './Post';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSinglePost } from '../actions/singlePostActions';

import { deletePost } from '../actions/deleteActions'
import { getPosts } from '../actions/postsActions'

const SinglePost = (props) => {
    const { id } = useParams();
    const { push } = useHistory()

    useEffect(() => {
        props.getSinglePost(id);
    }, []);

    const handleEdit = () => {

    }

    const handleDelete = () => {
        if(props.currentUser.username !== props.post.posted_by) {
            alert('not your post!')
        }
        props.deletePost(id)
        push('/homefeed')
    }

    return (
        <div>
            <Post post={props.post} />
            <button onClick={handleEdit}>edit</button>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        post: state.singlePost,
        currentUser: state.currentUser,
        users: state.users,
    }
}

export default connect(mapStateToProps, { getSinglePost, deletePost, getPosts })(SinglePost);