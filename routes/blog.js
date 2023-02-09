const express= require('express');

const router=express.Router();

const myController= require('../controller/blogController')
const Blog=require('../models/mymodel');




router.get('/new' , myController.new);

router.post('/' , myController.mypost);

router.get('/' , myController.findblog);

router.get('/:id' , myController.findid);

router.get('/:id/edit', myController.editblog);

router.patch('/:id' , myController.mypatch);
router.delete('/:id' , myController.mydelete);



module.exports=router;