const express=require("express")
const app=express()
const cors=require('cors')
const connectDB=require("./config/dataBase");

const postRoutes =require('./routes/posts') ;


connectDB()


//https://www.mongodb.com/cloud/atlas
app.use(express.json())
app.use(cors()) 

app.use('/posts',postRoutes);


const port =9000 

app.listen(port ,()=>console.log(`server ranning on port ${port}`))































// const bodyParser = require("body-parser");
// const mongoose= require("mongoose");
// const cors =require('cors');
// const express =require ('express');

// const app=express();




// app.use(bodyParser.json({limit:"30mb" ,extended:true}));
// app.use(bodyParser.urlencoded({limit:"30mb" ,extended:true}));
// app.use (cors());
// const CONNEXION_URL='mongodb+srv://javascriptmastery:javascriptmastery123@cluster0.k1qp3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority ' ;
// const PORT=process.env.PORT || 5000;
//  mongoose.connect(CONNEXION_URL,{ useNewUrlParser: true, useUnifiedTopology: true }) 
// .then(()=>app.listen(PORT,()=> console.log(`server running on port :${PORT}`)))
// .catch ((error)=>console.log (error));
// mongoose.set ('useFindAndModify',false);

