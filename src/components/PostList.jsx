import Post from './Post'
import classes from './PostList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';
import { useState } from 'react';
const PostList = ({isPosting, onStopPosting}) => {
  const [posts, setPosts] = useState([]);

  function addPostHandler(postData){
    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {
        isPosting && (
          <Modal onClose={onStopPosting}>
            <NewPost 
              onCancel={onStopPosting}
              onAddPost={addPostHandler}/>
          </Modal>
        )
      }
      {posts.length > 0 && (
        <ul className={classes.posts}>
        {posts.map((post) =>
          <Post
            key={post.name}
            name={post.name}
            text={post.text}
          />
        
        )}
       
      </ul>
      )}
      {posts.length === 0  &&  
          <div style={{textAlign: 'center', color: 'white'}}>
            <h2>There are no posts yet</h2>
            <p>Start adding some!</p>
          </div>
      }
          </>
  )
}

export default PostList
