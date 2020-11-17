

const Post = ({ post }) => {

    return (
        <div>
            <div>{post.username}</div>
            <div>{post.photo}</div>
            <div>{post.story}</div>
        </div>
    )
}

export default Post;
