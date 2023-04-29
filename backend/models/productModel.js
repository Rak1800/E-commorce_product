const mongoose=require('mongoose');
const objectId=mongoose.Schema.Types.ObjectId  

const productSchema=new mongoose.Schema({
   productName:{
    type:String,
    require:true
   },
   price:{
    type:String,
    require:true
   },
   catogory:{
    type:String,
    require:true
   },
   userId:{ 
   type:objectId,
   ref:"User"
   },
   company:{
    type:String,
    require:true
   }
},{timestamps:true})

module.exports=mongoose.model("products",productSchema)