import React ,{useState ,useEffect} from "react"
import useStyles from './style'
import FileBase from "react-file-base64";
import {TextField,Button,Typography,Paper} from '@material-ui/core'
import {useDispatch ,useSelector} from 'react-redux'
import {createPost,getPosts,editPost, toggleFalse} from '../../redux/actions/postsActions';


// get the current id 

const Form=()=>{
    const update =useSelector (state=>state.postsReducers.update)

    const updatePost=useSelector (state=> state.postsReducers.post)

    const [postData,setPostData]=useState({
          creator:'',title:'',message:'',tags:'',selectedFile:''
    });
    // const post=useSelector((state)=>( currentId ? state.posts.find((el)=>el._id === currentId):null));
    const classes=useStyles();
    const dispatch=useDispatch();
    // useEffect (()=>{
    //     if (post) setPostData(post)},[post])


    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch (createPost(postData))
        dispatch (getPosts())
        setPostData ({
            creator:'',title:'',message:'',tags:'',selectedFile:''
      })
    }

    const handleUpdate=(e)=>{
        e.preventDefault();
        dispatch (editPost(updatePost._id,postData))
        dispatch (getPosts())
        dispatch (toggleFalse())
        setPostData ({
            creator:'',title:'',message:'',tags:'',selectedFile:''
      })
    }
      
    useEffect (()=>{
     update ?
     setPostData (updatePost) 
     :  
       setPostData ({
        creator:'',title:'',message:'',tags:'',selectedFile:''
  })
    },[updatePost,update])

    const clear=()=>{
        setPostData ({
            creator:'',title:'',message:'',tags:'',selectedFile:''
      })
    }

    const hangelChange=(e)=>{
        setPostData({...postData ,[e.target.name]:e.target.value})   
    }


    return (
           
        <div>
            {
                update ? 
                <Paper className={classes.paper}>
                <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleUpdate}>
                       <Typography variant="h6" >
                                 Update Post  
                       </Typography>
                       <TextField 
                        name="creator"
                        variant="outlined"
                        label="Creator"
                        fullWidth  value={postData.creator }
                        onChange={hangelChange}> </TextField>
                           <TextField 
                        name="title"
                        variant="outlined"
                        label="Title"
                        fullWidth value={postData.title }
                        onChange={hangelChange}> </TextField>
    
                    <TextField
                        name="message"
                        variant="outlined"
                        label="Message"
                        fullWidth value={postData.message}
                        onChange={hangelChange}> </TextField>
    
    
                    <TextField
                        name="tags"
                        variant="outlined"
                        label="Tags"
                        fullWidth value={postData.tags}
                        onChange={hangelChange}> </TextField>
    
                   <div className={classes.fileInput}>
                       <FileBase type='file' multiple={false} 
                       onDone={ ({base64})=> setPostData({...postData , selectedFile:base64})}/> 
                    </div>
                     
                          <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Save Update Post</Button>
    
                       
                       <Button className={classes.buttonSubmit} variant="contained" color="secondary" 
                   size="small" type="submit"  onClick={clear} fullWidth>Clear</Button>
    
                </form>
    
            </Paper> :
              <Paper className={classes.paper}>
              <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                     <Typography variant="h6" >
                               Creating  a Memory 
                     </Typography>
                     <TextField 
                      name="creator"
                      variant="outlined"
                      label="Creator"
                      fullWidth value={postData.creator }
                      onChange={hangelChange}> </TextField>
                         <TextField 
                      name="title"
                      variant="outlined"
                      label="Title"
                      fullWidth value={postData.title }
                      onChange={hangelChange}> </TextField>
  
                  <TextField
                      name="message"
                      variant="outlined"
                      label="Message"
                      fullWidth value={postData.message}
                      onChange={hangelChange}> </TextField>
  
  
                  <TextField
                      name="tags"
                      variant="outlined"
                      label="Tags"
                      fullWidth value={postData.tags}
                      onChange={hangelChange}> </TextField>
  
                 <div className={classes.fileInput}>
                     <FileBase type='file' multiple={false} 
                     onDone={ ({base64})=> setPostData({...postData , selectedFile:base64})}/> 
                  </div>
                   
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
  
                     
                     <Button className={classes.buttonSubmit} variant="contained" color="secondary" 
                 size="small"   onClick={()=>clear()} fullWidth>Clear</Button>
  
              </form>
  
          </Paper>
            }
        </div>
    )}
export default Form