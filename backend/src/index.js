const express=require('express');
const mongoose =require('mongoose');
const bodyParser=require('body-parser')
const route=require('./routes/routes')
const cors =require("cors")


const app=express();
app.use(express.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
  
mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://Rak18000:Rakesh123@cluster0.xntrj.mongodb.net/full-stack',{
    useNewUrlParser:true
}).then(()=>console.log('mongoDb is connected')) 
.catch(err=>console.log(err))

app.use('/', route)
app.get("/hello",()=>{
    console.log("hello") 
})


app.listen(5000,()=>console.log('express is running on port '+(5000)))