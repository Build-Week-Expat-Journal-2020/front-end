import { useEffect, useState } from 'react';
import Post from './Post';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSinglePost } from '../actions/singlePostActions';
import { editPosts } from '../actions/editActions'
import { deletePost } from '../actions/deleteActions'
import { getPosts } from '../actions/postsActions'
import { StyledEdit } from '../StyledComponents/StyledEdit'

const initialPost = {
    photo: '',
    story: '',
    user_id: null,
}

const SinglePost = (props) => {   
    const [editing, setEditing] = useState(false)
    const [postToEdit, setPostToEdit] = useState(initialPost)

    const { id } = useParams();
    const { push } = useHistory()

    useEffect(() => {
        props.getSinglePost(id);
    }, []);

    const editPost = () => {
        setEditing(true)
        console.log("post ", props.post);
        setPostToEdit({
            photo: props.post.photo,
            story: props.post.story,
            user_id: props.post.user_id
        })
    }

    const handleDelete = () => {
        if(props.currentUser.username !== props.post.posted_by) {
            alert('not your post!')
        }
        props.deletePost(id)
        push('/homefeed')
    }

    const handleChange = e => {
        setPostToEdit({...postToEdit, [e.target.name]: e.target.value})
    }

    const updatePost = e => {
        e.preventDefault()
        props.editPosts(props.post.id, postToEdit)
        push('/homefeed')

    }

    return (
        <div>
            <Post post={props.post} />
            <button className='editButton' onClick={editPost}>edit</button>
            {
                editing ? 
                    <form onSubmit={updatePost}>
                    <input 
                        type='text'
                        name='photo'
                        placeholder='photo'
                        value={postToEdit.photo}
                        onChange={handleChange}
                        />
                        <input 
                        type='textarea'
                        name='story'
                        placeholder='story'
                        value={postToEdit.story}
                        onChange={handleChange}
                        />
                    <button>update</button>
                    <button onClick={() => setEditing(false)}>cancel</button>
                    </form>
                : null
            }
            <button className='editButton' onClick={handleDelete}>delete</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        post: state.singlePost,
        currentUser: state.currentUser,
    }
}

export default connect(mapStateToProps, { getSinglePost, deletePost, getPosts, editPosts })(SinglePost);