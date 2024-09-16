const express = require('express')
const router = express.Router();
const Candidate = require("../models/candidate")
const User = require('../models/user');
const { jwtAuthMiddleware, generateToken } = require("../jwt")


const checkAdmin = async(UserId)=>{
    try{
         const user = await User.findById(userID);
         if(user.role === 'admin'){
             return true;
         }
    }catch(err){
         return false;
    }
 }


 

module.exports=router