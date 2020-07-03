const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    //res.status(200).send("hello admin");
    res.redirect('admin.html');
});

router.get('/logout',(req,res)=>{
    res.status(200).send("Admin Logout");
});

module.exports=router;

