

const express = require('express');
const Blog = require('../models/mymodel');


module.exports.home=(req, res) => {
    res.send("Connected");
}

module.exports.new=(req, res) => {

    res.render('new');
}

module.exports.mypost=async (req, res) => {

    const blog = await Blog.create(req.body);
    res.redirect('/blog');
}


module.exports.findblog=async (req, res) => {
    const blog = await Blog.findAll();
    res.render('index', { blog });
}

module.exports.findid=async (req, res) => {
    
    const blog=await Blog.findOne({               
        where: {
            id:req.params.id
        }
    })

    res.render('show',{blog});
}


module.exports.editblog=async (req, res) => {

    const blog = await Blog.findOne({
        where: {
            id: req.params.id
        }
    })
    res.render('edit', { blog });
}



module.exports.mypatch=async (req, res) => {
    await Blog.update(req.body, {
        where: {
            id: req.params.id
        }
    })
    res.redirect(`/blog/${req.params.id}`);
}



module.exports.mydelete=async (req, res) => {
    await Blog.destroy({
        where: {
            id: req.params.id
        }
    })
    res.redirect('/blog');
}