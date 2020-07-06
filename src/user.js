const express=require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    console.log('its user');
    res.status(200).send("hello user");
});
router.get('/logout',(req,res)=>{
    res.status(200).send("User Logout");
});

module.exports=router;