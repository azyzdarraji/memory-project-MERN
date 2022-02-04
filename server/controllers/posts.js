const postMessage =require ('../models/postMessage')

// delete post 
exports.deletePost=async(req,res)=>{
    try {
      const {id}=req.params;
      await postMessage.findByIdAndDelete(id)
      
      res.status(200).send ("post deleted")
    } catch (error) {
        res.status(500).send('not deleted')
        
    }
}
  
// get posts 
exports.getPosts=async (req,res)=>{

  try {
      const postMessages= await postMessage.find()
      res.status(200).json({postMessages});
  } catch (error) {
    res.status(404).json({message:error.message});
  }
}
  // add post
exports.createPost= async(req,res)=>{
    const post=req.body ;
    const newPost= new postMessage(post);
    try {
        await newPost.save();

        // https://www.restapitutorial.com/httpstatuscodes.html
        res.status(201).json(newPost);
    } catch (error) {
       res.status(409).json({message:error.message}) ;
    }
}

// get ONe post 

exports.getOnePost =async(req,res)=>{
  const {id}=req.params;
  try {
   const post = await postMessage.findById(id);
   res.send({post}); 
  } catch (error) {
    console.log(error)
  }
}


exports.updatePost = async (req, res) => {
  const { id } = req.params;
  
  try {
    await postMessage.findByIdAndUpdate(id,{$set:{...req.body}})
        res.send ("post update")     
  } catch (error) {
     console.log(error)
  }
}



exports.likePost =async (req,res)=>{
  const {id}=req.params ;
  try {
  const post = await postMessage.findById(id);
  const upPost= await postMessage.findByIdAndUpdate(id,{likeCount:post.likeCount +1})
  res.send ({upPost})

  } catch (error) {
    console.log(error)
  }
}