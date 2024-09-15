import { useState } from 'react';
import Post from './Post'
import classes from './PostList.module.css'
import NewPost from './NewPost';
import Modal from './Modal';
const PostList = ({isPosting, onStopPosting}) => {
  const [ textC, setText ] = useState('');
  const [ name, setName ] = useState('');


  function changeText(event) {
    console.log(event.target.value)
    setText(event.target.value);
  }
  function changeName(event) {
    setName(event.target.value);
  }

  return (
    <>
      {
        isPosting && (
          <Modal onClose={onStopPosting}>
            <NewPost 
              onTextChange={changeText} 
              onNameChange={changeName} />
          </Modal>
        )
      }

    <ul className={classes.posts}>
        <Post
        name = {name}
        text={textC}
      />
      <Post
        name ={name}
        text={textC}
      />
    </ul>

    </>
  )
}

export default PostList
