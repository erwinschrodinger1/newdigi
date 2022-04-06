const express= require("express");
const router= express.Router();
const dotenv= require("dotenv");
const User= require("../models/userSchema");
const cookieParser= require("cookie-parser");
const auth= require("../middleware/auth");
const jwt= require("jsonwebtoken");

router.use(cookieParser());
dotenv.config({path:"../config.env"});
router.post("/authenticate",(req,res)=>
{ 

    try {
    
        const token= req.body.token;
        

        const sec=process.env.SECRET_KEY;
        const verifyUser= jwt.verify(token,sec);
       
        
        const user=User.findOne({_id:verifyUser._id,"tokens.token":token});
        
        
        if(!user){
            
            throw error;
        }
    
        
    } catch (error) {
        console.log("ERROR FOUND");
        res.status(202).json("");
    }
});

module.exports=router;
