const mongoose= require('mongoose');

const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    phone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
       type:String,
    require:true
    }, 
    isDeleted:{
       type:Boolean,
       default:false
    }

    
},{timestamps:true})

module.exports=mongoose.model('User',userSchema)