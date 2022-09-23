const express = require ("express");
const cors = require("cors");
const mongoose = require ("mongoose");


const app= express();
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());  
const PORT=process.env.PORT || 5000;
const atl="mongodb://localhost:27017/registration";

mongoose.connect(atl,{
    useNewUrlParser: true,
    useUnifiedTopology:true,

},(err)=>{
  if(err)
  {
    console.log(err) 
  }
  else{
    console.log("DB connected")
  }
    
})

 const userSchema= new mongoose.Schema({
    name:String,
    userName:String,
    phone:Number,
})
const User=new mongoose.model("User",userSchema)

app.get("/submit",(req,res)=>{
    User.find((err, docs) => {
        if (!err) {
           res.send(docs)
        } else {
            console.log('Failed to retrieve the Course List: ' + err);
        }
    });

 })




app.post("/submit",(req,res)=>{

    // console.log("submited")


    let customer=new User({
         name:req.body.name,
          userName:req.body.userName,
         phone:req.body.phone,
     } )
           
     customer.save(err=>{
        if(err)
        {
            console.log(err);
        }
        else{
            console.log("+6"+customer)
        }
     })
})

app.listen(PORT,()=>{
    console.log("BE started at port 9002")
})