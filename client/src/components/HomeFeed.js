import { StyledFeed } from '../StyledComponents/StyledPosts'
import { connect } from 'react-redux';
import { getPosts } from '../actions/postsActions'
import axiosWithAuth from '../utils/axiosWithAuth'

const HomeFeed = ({ getPosts}) => {

    const loadPosts = () => {
        getPosts()
    }

    return (
        <StyledFeed>
            <div className='container'>
                <p>expat </p>
                <button onClick={loadPosts} className='loadFeed'>load feed</button>
            </div>
        </StyledFeed>
        
    )
}

export default connect(null, { getPosts })(HomeFeed);