const mongoose= require("mongoose")
require("dotenv").config({path:'./config/.env'})
const connectDB=async()=>{
    try {
       await mongoose.connect(process.env.database)
       console.log('data base jawha behi ')
    } catch (error) {
        console.log(error)
        
    }

}
module.exports=connectDB