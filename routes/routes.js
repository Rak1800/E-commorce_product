const express=require('express'); 
const { productAdd, getProduct, deleteProduct, updateProduct, geproductId, searchproduct } = require('../controllers/product'); 
const {register, login, getUser, updateUser, deleteUser} = require('../controllers/user');
const router=express.Router();

router.get('/hello',function(req,res){
    res.send('hello world')
})
router.post("/register",register) 
router.post("/login",login)
router.get("/users",getUser)
router.put("/updateuser/:userId",updateUser)  
router.delete("/deleteuser/:userId",deleteUser) 

router.post("/addproduct",productAdd)
router.get("/products/:userId",getProduct) 
router.get("/product/:productId",geproductId) 
router.put("/update/:productId",updateProduct)
router.delete("/deleteProduct/:productId",deleteProduct) 
router.get("/search/:userId/:key",searchproduct) 

module.exports=router   