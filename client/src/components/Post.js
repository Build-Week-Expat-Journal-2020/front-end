import styled from 'styled-components';
import { Link } from 'react-router-dom'

const StyledPost = styled.div `

    display: flex;
    flex-direction: column;
    align-items: center;
    color: black;

    .user-name {
        text-decoration: none;
        color: black;
        padding: 1rem;
    }
    
    .story {
        padding: 2rem;
        padding-left: 1rem;
    }
    .post-container {
        width: 75%;
        border: 1px solid white;
        margin: 2rem 0;
        border-radius: 5px;
        background-color: white;
    }
    img {
        width: 100%;
    }

    @media (max-width: 700px) {
        .post-container {
            width: 100%;
            border-radius: 0;
        }
    }

`

const Post = ({ post }) => {

    return (
        <StyledPost>
            <div className="post-container">
            <Link to="/usersposts" ><div className="user-name">{post.posted_by}</div></Link>
            <img src={post.photo}/>
            <div className="story">{post.story}</div>
            </div>
        </StyledPost>
    )
}

export default Post;
