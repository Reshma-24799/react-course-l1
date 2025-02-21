import { Link } from 'react-router-dom'
import classes from './Post.module.css'
const Post = ({id,name,text}) => {
  return (
    <li className={classes.post}>
      <Link to={id}>
      <p className={classes.author}>Hello , This is {name}</p>
      <p className={classes.text}>Content is {text}</p>
      </Link>
      
    </li>
  )
}

export default Post
