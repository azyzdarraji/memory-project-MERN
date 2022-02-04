const express= require('express')
const router=express.Router()
const {getPosts,createPost,updatePost,getOnePost,deletePost,likePost} =require('../controllers/posts')
router.get('/',getPosts);
router.get ('/:id',getOnePost);
router.post('/',createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost); 
router.put('/:id/likePost',likePost);


module.exports=router; 