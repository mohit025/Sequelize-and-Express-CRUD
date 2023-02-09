const express = require('express');

const router = express.Router();

const myController= require('../controller/blogController')
const blogRoute=require('./blog')

router.get('/' , myController.home);
router.use('/blog', blogRoute); 


router.use((req,res)=>{
    res.render('404')
})
module.exports=router;