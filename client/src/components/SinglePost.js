import { useEffect } from 'react';
import Post from './Post';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSinglePost } from '../actions/singlePostActions';

const SinglePost = (props) => {
    const { id } = useParams();

    useEffect(() => {
        props.getSinglePost(id);
    }, []);

    return (
        <div>
            <Post post={props.post} />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        post: state.singlePost
    }
}

export default connect(mapStateToProps, { getSinglePost })(SinglePost);