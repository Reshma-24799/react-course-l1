import classes from './Post.module.css'
const Post = ({name,text}) => {
  return (
    <li className={classes.post}>
      <p className={classes.author}>Hello , This is {name}</p>
      <p className={classes.text}>Content is {text}</p>
    </li>
  )
}

export default Post
