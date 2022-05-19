const express = require('express');
const Article = require('./../modals/article')
const {forward} = require("console-control-strings");
const router = express.Router();

router.get('/new' , (req , res) => {
    res.render('articles/new')
})

router.get('/:id', (req , res)  => {
    req.render(`/articles/${article.id}`)
})

router.post('/' , async (req , res) => {
    let article = new Article({
        title : req.body.title,
        description : req.body.description,
        markdown : req.body.markdown,
    })

    try {
        article = await article.save();
        req.redirect(`/articles/${article.id}`)
    }catch (e) {
        res.render('/articles/new' , {article: article})
    }
})

module.exports = router;