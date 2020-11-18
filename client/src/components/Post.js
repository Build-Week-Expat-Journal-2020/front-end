import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { StyledPost } from '../StyledComponents/StyledPost'

const Post = ({ post }) => {

    return (

      <StyledPost>
        <div className="bigContainer">
          <div className='postContainer'>
            <div className='userName'>
              <Link to={`/usersposts/${post.user_id}`}>
                {post.posted_by}
              </Link>
            </div>
            <div className='postImg'>
              <Link to={`/post/${post.id}`}>
                <img src={post.photo} alt="post"  />
              </Link>
            </div>
            <div className="story">
              {post.story}
            </div>
          </div>
        </div>
      </StyledPost>
    );

}

export default Post;

