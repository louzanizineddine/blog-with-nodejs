const express= require('express');
const mongoose = require('mongoose')
const app = express();

mongoose.connect('mongodb://localhost/', {
    useNewUrlParser:true,
    useUnifiedTopology:true
})
app.use(express.urlencoded({extended:true}))

const articleRouter = require('./routes/articles')
app.set('view engine' , 'ejs')

app.use('/articles' , articleRouter);
app.get('/' , (req , res) => {
    const articles = [{
        title : "test article",
        createdAt: new Date(),
        description: "Test description"
    }]
    res.render('articles/index' , {articles: articles})

})

app.listen(5000)