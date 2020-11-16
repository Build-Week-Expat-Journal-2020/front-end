import styled from 'styled-components';
import { StyledFeed } from '../StyledComponents/StyledPosts'

import { useHistory, Link } from 'react-router-dom';
import { getPosts } from '../actions/postsActions'

const HomeFeed = ({ getPosts }) => {

    const { push } = useHistory();

    const handleChange = () => {
        console.log('change!')
        // getPosts()
    }

    return (
        <StyledFeed>
            <div className='container'>
                <p>expat </p>
                <button onClick={handleChange} className='loadFeed'>load feed</button>
            </div>
        </StyledFeed>
        
    )
}

export default HomeFeed;