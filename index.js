const express = require('express')
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./Data/Categories.json');
const news = require('./Data/News.json');

app.get('/',(req, res) =>{
    res.send('News API Running');
});

app.get('/news-categories',(req, res) =>{
    res.send(categories);
});

app.get('/category/:id', (req, res) =>{
    const id = req.params.id;
    if(id === '08'){
        res.send(news);
    }
    else{
        const category_news = news.filter(n => n_id ===  id);
        res.send(category_news);
    }
})

app.get('/news', (req, res) =>{
    res.send(news);
})

app.get('/news/:id', (req,res) =>{
    // res.send(news);
    const id = req.params.id;
    const selecteNews = news.find(n =>n._id === id);
    res.send(selecteNews);
})

app.listen(port, () =>{
    console.log('Digital News Server Running on Port', port);
})
