const productModel = require("../models/productModel")

const productAdd= async function(req,res){
const data=req.body
const {productName,price,catogory,userId,company}=data
const saveData= await productModel.create(data)
res.status(201).send({status:true,message:"Product add succussful",data:saveData})

}

const getProduct= async function(req,res){
  let userId=req.params.userId
   let data=await productModel.find({userId:userId})
   if(!data) res.send({data:[]})
   if(data.length>0){
    res.send({status:true, message:"All product", data:data}) 
   }else{
    return res.send({status:false,mesage:"not product found"})  
   }
}
const geproductId= async function(req,res){
  let productId=req.params.productId
  let checkproduct=await productModel.findOne({_id:productId})
  if(!checkproduct) return res.send({status:false,mesaage:"no product "})  
  return res.send({status:true,data:checkproduct})

}

const updateProduct= async function(req,res){  
  let productId=req.params.productId
  let checkproduct=await productModel.findOne({_id:productId})
  if(!checkproduct) return res.send({status:false,mesaage:"no product "})  
  let data=req.body
  const {productName,price,catogory}=data
  let update= await productModel.findOneAndUpdate({_id:productId},{$set:{
    productName:productName,
    price:price,
    catogory:catogory
  }},{new:true})
  res.send({status:true, message:"product update successful"}) 
}

const deleteProduct= async (req, res)=>{
  let productId=req.params.productId 
  let checkproduct= await productModel.findById({_id:productId})
  if(!checkproduct) return res.send({status:false,mesaage:"already deleted"})            
  const result= await productModel.deleteOne({_id:productId})
res.send({status:true,message:'product deleted'})

}

const searchproduct= async(req,res)=>{
  let userId=req.params.userId
  let key=req.params.key
  let result=await productModel.find({userId:userId,
    "$or":[
      {productName:{$regex:key}},
      {price:{$regex:key}},
      {catogory:{$regex:key}},
      {company:{$regex:key}},
    ]
     }) 
     res.send({status:true,result}) 
    } 


module.exports={productAdd,getProduct,deleteProduct,updateProduct,geproductId,searchproduct}  