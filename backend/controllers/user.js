const userschema = require("../models/userModel")


const  register=async function (req,res){

  let data=req.body
  let {name,phone,email,password}=data

  let saveData=await userschema.create(data) 
  saveData=saveData.toObject();
  delete saveData.password
  res.send({status:true,message:"Registration successful", data:saveData}) 
} 
const login =async function (req,res){
    let data=req.body
    const {email,password}=data
    let checkdata=await userschema.findOne({email:email,password:password})
    
    if(!checkdata) return res.send({status:false,message:"email and password is not available"})

    res.status(200).send({status:true,message:"login Successfull",data:checkdata})  
}
const getUser=async function(req,res){
    const data =await userschema.find({isDeleted:false})
    res.send({satus:true,message:data})
}

const updateUser=async function (req,res){
    let userId=req.params.userId
    if(!userId) return res.send({status:false ,message :"provide a user Id"})
    let usercheck=await userschema.findById({_id:userId,isDeleted:false})
    if(!usercheck) return res.send({satus:false,message :"user not found"})
    let data=req.body
    const {name,phone,email,password}=data
    const updateData=await userschema.findOneAndUpdate({_id:userId},{
        $set:{
            name:name,
            phone:phone,
            email:email,
            password:password
        }
    },{new:true})

    res.send({status:true,message:"updated",data:updateData})
    

}

const deleteUser=async function(req,res){
         const userId=req.params.userId

        let findUser=await userschema.findOne({_id:userId,isDeleted:false})
        if(!findUser) return res.send({status:false,message:"user not available or already deleted"})
         const deletedata= await userschema.findOneAndUpdate({_id:userId},{$set:{
            isDeleted:true,date:new Date()
         }},{new:true})
         res.send({status:true, message:"deleted succussfull",data:deletedata})
}

module.exports={register,login,getUser,updateUser,deleteUser} 