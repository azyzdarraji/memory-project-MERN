import React from "react"
import "./Post.css"
import moment from 'moment';
import { getOnePost ,toggleTrue,deletePost, getPosts ,likePost} from "../../../redux/actions/postsActions";
import { useDispatch } from "react-redux";


const Post=({post})=>{
    
    const dispatch=useDispatch();
    return (
            <div className="formPost">
            {/* <CardMedia classeName={classes.media} img={post.selectedFile  || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} /> */}
              <div className="imagePost">  <img src={post.selectedFile}/></div>
            <div className="overlayPost">
                <h6>{post.creator}</h6>
                <p>{moment(post.createdAt).fromNow()}</p>
            </div>
            <div className="overlayPost2">
                <button style={{color:"black"}}  onClick={()=>{dispatch(getOnePost(post._id));dispatch(toggleTrue())}}  >
                    ...
                </button>
            </div>
            <div className="detailsPost">
                <p>{post.tags.join(' ').split(' ').map(el=>`#${el}`).join(' ')} </p>  
                <p className="title">{post.title} </p>
                 <p>{post.message} </p>

                <div className="acountAction">

                    <i className="fas fa-thumbs-up" onClick={() => { dispatch(getOnePost(post._id)); dispatch(likePost(post._id)); dispatch(getPosts()) }}> <span>Like </span>

                        {post.likeCount} </i>
                    <i className="fas fa-trash-alt del" onClick={() => { dispatch(deletePost(post._id)); dispatch(getPosts()) }}> <span className="span">Delete</span>
                    </i>
                </div>
            </div>
            </div>
     )
}
export default Post