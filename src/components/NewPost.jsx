
import { useState } from 'react';
import classes from './NewPost.module.css';

function NewPost({ onCancel, onAddPost}) {
  const [ textC, setText ] = useState('');
  const [ name, setName ] = useState('');

  function changeText(event) {
    setText(event.target.value);
  }
  function changeName(event) {
    setName(event.target.value);
  }
  function submitHandler(event){
    event.preventDefault();
    const postData = {
      text : textC,
      name: name
    }
    onAddPost(postData);
    onCancel();
  }
  
  return (
    <form 
      className={classes.form}
      onSubmit={submitHandler}
    >
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required value={textC} rows={3} onChange={changeText}/>
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" value={name} required onChange={changeName}/>
      </p>
      <p className={classes.actions}>
        <button
          type="button"
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
        >
          Submit
        </button>
      </p>
    </form>
  );
}

export default NewPost;