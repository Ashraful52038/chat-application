
//externel imports
const express=require('express');

//internal imports
const {getUsers}=require("../controller/usersController");

const router=express.Router();

//ussers page
router.get("/",getUsers);

module.exports=router;