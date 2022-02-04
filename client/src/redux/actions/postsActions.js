// import * as api from "../../api"
import axios from 'axios';
import {FETCH_ALL, GET_ONE_POST ,TOGGLE_TRUE,TOGGLE_FALSE, UPDATE} from "../type"

// ACTIONS CREATORS 

// deletePost 
export const deletePost=(id)=>async (dispatch)=> {
 try {
     await axios.delete(`http://localhost:9000/posts/${id}`)
     dispatch (getPosts());
 } catch (error) {
     console.log (error)
 }
}

//getAllPosts

export const getPosts=()=>async(dispatch)=>{
 
  try {
      const res=await axios.get("http://localhost:9000/posts")
      dispatch ({type:FETCH_ALL,payload:res.data})
  } catch (error) {
      console.log(error.message);
  }

}

// ADD POST CREATE POST 

export const createPost = (data) => async(dispatch)=> {
  try {
    await axios.post("http://localhost:9000/posts",data);
    dispatch (getPosts());
  } catch (error) {
    console.log(error.message);

  }
}

// get ONE POST 

export const getOnePost=(id)=> async (dispatch)=> {
  try {
    const res=await axios.get(`http://localhost:9000/posts/${id}`)
    dispatch ({type:GET_ONE_POST,payload:res.data})
  } catch (error) {
     console.log(error);
  }
}

export const toggleTrue=()=> {
  return (
    {type:TOGGLE_TRUE}
  )
}
export const toggleFalse=()=> {
  return (
    {type:TOGGLE_FALSE}
  )
}

// // UPDATE  POST  PUT

export const editPost=(id,post)=> async(dispatch)=>{
  
  try {
     await axios.put(`http://localhost:9000/posts/${id}`,post)

    dispatch (getPosts())
  } catch (error){
    console.log(error.message);
  }
}

//likeCount 


export const likePost=(id)=> async(dispatch)=>{
  
  try {
    const res=await axios.put(`http://localhost:9000/posts/${id}/likePost`)
    dispatch ({type:UPDATE,payload:res.data})


  } catch (error){
    console.log(error.message);
  }
}